import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

/**
 * Simple, but nice pager
 * @param {
 *  totalPages, 
 *  currentPage,
 *  onChange,
 *  maxPagesShowed
 * } props
 */
export default (props) => {
    const [currentPage, setCurrentPage] = React.useState(props.currentPage);
    const [fromToPage, setFromToPage] = React.useState({
        from: props.currentPage,
        to: props.maxPagesShowed < props.totalPages
            ? props.maxPagesShowed
            : props.totalPages
    });

    // Range of pages preferente in the center
    const refreshRange = () => {
        let from = currentPage - (props.maxPagesShowed / 2);
        from = from + props.maxPagesShowed - 1 > props.totalPages
            ? props.totalPages - props.maxPagesShowed + 1
            : from;
        from = from >= 1
            ? from
            : 1;
        let to = from + props.maxPagesShowed - 1;
        to = to < props.totalPages
            ? to
            : props.totalPages;
        setFromToPage({ from, to });
    }
    React.useEffect(() => {
        props.onChange && props.onChange(currentPage);
        refreshRange();
    }, [currentPage, props.onChange]);
    return (
        <Pagination>
            <Pagination.First disabled={currentPage === 1} onClick={_ => setCurrentPage(1)} />
            <Pagination.Prev disabled={currentPage === 1} onClick={_ => setCurrentPage(currentPage - 1)} />
            {
                fromToPage.from > 1 &&
                <Pagination.Ellipsis disabled />
            }
            {
                [...Array(fromToPage.to - fromToPage.from + 1).keys()]
                    .map(idx => {
                        const page = idx + fromToPage.from;
                        return (<Pagination.Item key={idx} onClick={_ => setCurrentPage(page)} active={page === currentPage}>{page}</Pagination.Item>)
                    })
            }
            {
                fromToPage.to < props.totalPages &&
                <Pagination.Ellipsis disabled />
            }
            <Pagination.Next disabled={currentPage === props.totalPages} onClick={_ => setCurrentPage(currentPage + 1)} />
            <Pagination.Last disabled={currentPage === props.totalPages} onClick={_ => setCurrentPage(props.totalPages)}/>
        </Pagination>
    )
}