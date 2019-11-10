import React from 'react';
//import { FixedSizeList as List } from 'react-window';

import ListGroup from 'react-bootstrap/ListGroup';

import memberApi2Member from '../core/transforms/memberApi2Member';
import Member from './Member';
import Pager from './Pager';
import Loading from './Loading';

/**
 * The list of members, its apply local filters
 * @param {*} props 
 */
export const Members = (props) => {
    const [membersData, setMembersData] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const showedByPage = 7;

    React.useEffect(() => {
        let auxMembers = !props.isFetching &&
            props.data && props.data.results && props.data.results.length > 0 && props.data.results[0].members.length > 0
            ? props.data.results[0].members
                .map(memberApi2Member)
            : [];
        // Local filters
        // props.data has only members of Chamber and congress selected, its are filter remotely
        if (props.filters.isAdvanced !== undefined) {
            // Basic or advanced search
            if (!props.filters.isAdvanced && props.filters.basicSearch.length > 0) {
                auxMembers = auxMembers
                    .filter(m =>
                        Object.keys(m)
                            .some(k => m[k] !== null && !(m[k] instanceof Date) && m[k].toString().toLocaleLowerCase().includes(props.filters.basicSearch))
                    );
            } else {
                auxMembers = auxMembers
                    .filter(m =>
                        (props.filters.name.length === 0 || m.full_name.toLocaleLowerCase().includes(props.filters.name.toLocaleLowerCase()))
                        && m.party.startsWith(props.filters.party)
                        && (!props.filters.inOffice || m.in_office)
                    )
            }
        }
        setMembersData(auxMembers);

    }, [props.isFetching, props.filters]);
    return (
        <>
            {
                props.isFetching &&
                <Loading />
            }
            {
                !props.isFetching && membersData.length > 0 &&
                <Pager
                    totalPages={Math.ceil(membersData.length / showedByPage)}
                    currentPage={currentPage}
                    onChange={setCurrentPage}
                    maxPagesShowed={10}
                />
            }
            {
                <ListGroup>
                    {
                        membersData
                            .slice(showedByPage * (currentPage - 1), showedByPage * currentPage)
                            .map((m, idx) =>
                                <Member key={`member_${m.id}_${idx}`} data={m}></Member>
                            )
                    }
                </ListGroup>
            }
        </>
    );
}