import React from 'react';
import Login from'./Login';
import Signup from'./Signup';
import BikeCarousel from './Carousel';
import { Container, Row, Col } from 'reactstrap';

const Auth = (props) => {
    return(
        <Container className='auth-container'>
            <BikeCarousel />
            <Row>
                <Col md='6'>
                    <Signup setToken={props.setToken}/>
                </Col>
                <Col md='6' className='login-col'>
                    <Login setToken={props.setToken}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;