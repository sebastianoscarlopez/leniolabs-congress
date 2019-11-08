import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

import MembersContext from './MembersContext';

/**
 * Card with member information
 */
export default (props) => {
    // Member's fields that have not generic render
    const specialDisplay = ['FullName', 'Birth', 'Facebook', 'Web', 'api_uri', 'inOffice', 'id'];

    const [selected, setSelected] = React.useContext(MembersContext);
    const handleSelect = _ => {
        setSelected(props.data);
    };
    if (props.data.Twitter && props.data.Twitter.length > 0) {
        //fetchImageProfile(props.data.id, props.data.Twitter);
    }
    return (
        <ListGroup.Item onClick={handleSelect} active={selected.id === props.data.id}>
            <Row>
                <Col md={2} xs={12}>
                    <Image roundedCircle height={100} src={`https://twitter.com/${props.data.Twitter}/profile_image?size=original`} />
                </Col>
                <Col xs={10} >
                    <Row>
                        <Col xs={12} >
                            {props.data.FullName}
                        </Col>
                    </Row>
                    <Row>
                        {
                            Object.keys(props.data)
                                .filter(k => !specialDisplay.includes(k))
                                .map(k => {
                                    return props.data[k]
                                        ? <Col key={`member_${props.data.id}_${k}`} md={4} xs={6}>
                                            <Row>
                                                <Col xs={12}>
                                                    {k.replace(/_/g, ' ')}
                                                </Col>
                                                <Col xs={12}>
                                                    {props.data[k]}
                                                </Col>
                                            </Row>
                                        </Col>
                                        : null;
                                })
                        }
                        {
                            props.data.Facebook
                                ? <Col xs={6}>
                                    <Row>
                                        <Col xs={12}>Facebook</Col>
                                        <Col xs={12}>
                                            {props.data.Facebook}
                                        </Col>
                                    </Row>
                                </Col>
                                : null
                        }
                        {
                            props.data.Web
                                ? <Col xs={6}>
                                    <Row>
                                        <Col xs={12}>Web</Col>
                                        <Col xs={12}>
                                            {props.data.Web}
                                        </Col>
                                    </Row>
                                </Col>
                                : null
                        }
                    </Row>
                </Col>
            </Row>
        </ListGroup.Item>
    );
}
