import React from 'react';
import logo from './logo.svg';
import './Card.css';
import { Container, Row } from 'react-bootstrap';

function Card() {
  return (
    <div className="Card">
        <Container fluid>
            <Row className="justify-content-md-center">
                <p>Stephanie Kwok</p>
            </Row>
        </Container>
    </div>
  );
}

export default Card;
