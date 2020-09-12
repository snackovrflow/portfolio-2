import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <header className="App-header">
          <Card />
        </header>
      </Container>
    </div>
  );
}

export default App;
