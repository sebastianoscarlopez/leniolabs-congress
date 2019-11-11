import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import './styles.scss';
import leniolabsLogo from '../../assets/leniolabs-isologo.svg';

const Footer = (props) => {
    return (
        <>
            {
                <Container className='footer-container' >
                    <Row>
                        <Col xs={12}>
                            <Image src={leniolabsLogo} height={50} />
                            This is a Leniolabs challenge. Source code can be found here <a href='https://github.com/sebastianoscarlopez/leniolabs-congress'>https://github.com/sebastianoscarlopez/leniolabs-congress</a>
                        </Col>
                    </Row>
                </Container>
            }
        </>
    )
}

export default Footer;