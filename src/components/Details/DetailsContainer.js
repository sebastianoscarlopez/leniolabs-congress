import React from 'react';
import {
    useHistory,
    //    useParams
} from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import * as Render from '../shared/MemberItemRenders';
import RowHeader from '../shared/RowHeader';
import PersonPicture from '../shared/PersonPicture';
import Loading from '../Loading/';

import './styles.scss';

/**
 * Show detailed information about a member
 */
const MembersContainer = (props) => {
    const history = useHistory()
    const member = JSON.parse(window.localStorage.getItem('selected'));
    //const { idMember } = useParams();
    // Member's fields that have not generic render
    const propertiesDisplay =
        ['party', 'gender',
            'birth',
            'title', 'seniority',
            'twitter_account', 'youtube_account',
            { key: 'Web', render: Render.ampleGenericRender },
            { key: 'Facebook', render: Render.ampleGenericRender },
            'office', 'phone', 'fax', 'senate_class', 'next_election', 'total_votes', 'missed_votes', 'total_present', 'last_update'
        ];
    return (
        <>
            <Container>
                <Row className='back-container'>
                    <RowHeader>
                        <button type="button" onClick={() => history.goBack()}>{'<'}</button>
                    </RowHeader>
                </Row>
            </Container>
            {
                props.isFetching &&
                <Loading />
            }
            {
                !props.isFetching &&
                <Container className='details-container'>
                    <Container>
                        <Row className='details-row'>
                            <Col md={2} xs={12}>
                                <PersonPicture gender={member.gender} twitter_account={member.twitter_account} />
                            </Col>
                            <Col xs={10} >
                                <Row>
                                    <Col xs={12} className='name'>
                                        {member.full_name}
                                    </Col>
                                </Row>
                                <Row>
                                    {
                                        propertiesDisplay
                                            .map(pd => {
                                                return typeof pd === 'string' // string are generic render
                                                    ? Render.genericRender(member, pd)
                                                    : pd.render(member, pd.key)
                                            })
                                    }
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            }
        </>
    )
}

export default MembersContainer;