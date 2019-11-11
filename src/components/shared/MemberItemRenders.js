import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './styles.scss';

export const genericRender = (member, k) => {
    return member[k]
        ?
        <Col key={`member_${member.id}_${k}`} md={4} xs={6} >
            <Row>
                <Col xs={12} className='member-property-title'>
                    {   // Capitalize and replace _ by space
                        k.split('_')
                            .map(w =>
                                w.replace(/^(.)/g, v => v.toUpperCase()) // Function used in replace because js does not support \U
                            ).join(' ')
                    }
                </Col>
                <Col xs={12} className='member-property-value'>
                    {member[k]}
                </Col>
            </Row>
        </Col>
        : null;
}

export const ampleGenericRender = (member, k) => {
    return member[k]
        ?
        <Col key={`member_${member.id}_${k}`} xs={6} >
            <Row>
                <Col xs={12} className='member-property-title'>
                    {k.replace(/_/g, ' ')}
                </Col>
                <Col xs={12} className='member-property-value'>
                    {member[k]}
                </Col>
            </Row>
        </Col>
        : null;
}
