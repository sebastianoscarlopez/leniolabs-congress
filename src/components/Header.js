import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

import leniolabsIlustration from '../assets/leniolabs-illustration-2.svg';
import leniolabsLogo from '../assets/leniolabs-isologo.svg';
import congress from '../assets/congress.jpeg';

/**
 * Header that admit childrens
 */
const Header = (props) => {
    return (
        <>
            {
                !props.isFetching &&
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Image src={congress} height={200} />
                            <Image src={leniolabsLogo} height={50} />
                        </Col>
                    </Row>
                    {props.children}
                </Container>
            }
        </>
    )
}

export default Header;