import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default (props) => (
    <Container className='row-header'>
        <Row>
            <Col xs={12}>
                {props.children}
            </Col>
        </Row>
    </Container>
);