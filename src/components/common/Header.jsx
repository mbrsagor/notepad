import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import NavBar from './NavBar';

class Header extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={12}>
                            <NavBar />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Header
