import React from 'react';
import ReactDOM from 'react-dom'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

//import leniolabsIlustration from '../assets/leniolabs-illustration-2.svg';
import leniolabsLogo from '../../assets/leniolabs-isologo.svg';
import congress from '../../assets/capitol.jpg';

import styles from './styles.scss';

/**
 * className={container}
 * Header that admit childrens
 */
const Header = (props) => {
    return (
        <>
            {
                <Container className='header-container'>
                    <Row>
                        <Col xs={12}>
                            <Image className='leniolabs' src={leniolabsLogo} height={50} />
                            <Image className='congress' src={congress} width='100%' />
                        </Col>
                    </Row>
                </Container>
            }
        </>
    )
}

export default Header;