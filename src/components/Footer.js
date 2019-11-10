import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import leniolabsLogo from '../assets/leniolabs-isologo.svg';

const Footer = (props) => {
    return (
        <>
            {
                !props.isFetching &&
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Image src={leniolabsLogo} height={50} />
                            This is a Leniolabs challenge. Source code can be found here https://github.com/sebastianoscarlopez/leniolabs-congress
                        </Col>
                    </Row>
                    {props.children}
                </Container>
            }
        </>
    )
}

export default Footer;