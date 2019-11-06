import React from 'react';

import loading from '../../assets/loading.gif';

export const Members = (props) => {
    React.useEffect(()=>{
        //console.log(props.filters);
    }, [props]);
    return (
        <>
        {
            props.isFetching &&
            <>
                <img src={loading} />
            </>
        }
        {
            !props.isFetching && props.filters && 
            Object.keys(props.filters).map(k => 
                <p key={k}>{k}:{props.filters[k].toString()}</p>
            )
        }
        {
            !props.isFetching && props.data && props.data.results && props.data.results.length > 0 &&
            Object.keys(props.data.results[0].members[0]).map(k => 
                <p key={k}>{k}:{props.data.results[0].members[0][k]}</p>
            )
        }
        </>
    );
}