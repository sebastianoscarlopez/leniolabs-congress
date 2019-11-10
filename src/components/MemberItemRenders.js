import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const genericRender = (member, k) => {
    return member[k]
        ?
        <Col key={`member_${member.id}_${k}`} md={4} xs={6} >
            <Row>
                <Col xs={12}>
                    {   // Capitalize and replace _ by space
                        k.split('_')
                            .map(w =>
                                w.replace(/^(.)/g, v => v.toUpperCase()) // Function used in replace because js does not support \U
                            ).join(' ')
                    }
                </Col>
                <Col xs={12}>
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
                <Col xs={12}>
                    {k.replace(/_/g, ' ')}
                </Col>
                <Col xs={12}>
                    {member[k]}
                </Col>
            </Row>
        </Col>
        : null;
}
