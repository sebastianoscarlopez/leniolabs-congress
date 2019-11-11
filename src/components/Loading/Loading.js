import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import loading from '../../assets/loading_segment.svg';

import styles from './styles.scss';

export default () => (
    <Row className='loading-container'>
        <Col>
            <img src={loading} alt='Loading. . .' />
        </Col>
    </Row>
);