import React from 'react'
import './style.css';
import { Jumbotron, Container } from 'react-bootstrap';

export default function index() {
    return (
        <Jumbotron fluid className="jumbotron-style">
            <Container>
                <h1 className="text-center">React Weather App!</h1>
                <p className="text-center">
                    This is my basic ReactJS App for local weather info!
                </p>
            </Container>
        </Jumbotron>
    )
}
