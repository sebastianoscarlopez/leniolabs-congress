import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import MembersContext from './MembersContext';

/**
 * Card with member information
 */
export const Member = (props) => {
    // Member's fields that have not generic render
    const specialDisplay = ['FullName', 'Birth', 'api_uri', 'inOffice', 'id'];

    const [selected, setSelected] = React.useContext(MembersContext);
    const handleSelect = _ => {
        setSelected(props.data);
    };
    return (
        <ListGroup.Item onClick={handleSelect} active={selected.id === props.data.id}>
            <Row>
                <Col xs={12} >
                    {props.data.FullName}
                </Col>
                {
                    Object.keys(props.data)
                        .filter(k=> !specialDisplay.includes(k) )
                        .map(k => {
                            return props.data[k]
                                ? <Col key={`member_${props.data.id}_${k}`} md={4} xs={6}>{k.replace(/_/g, ' ')}<br />{props.data[k]}</Col>
                                : null;
                        })
                }
            </Row>
        </ListGroup.Item>
    );
}