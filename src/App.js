import React from "react";

import Container from "./components/Container/Container";
import Row from "./components/Row/Row";
import Col from "./components/Col/Col";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

import "./App.css";


function App() {
  return (
      <Container className="App" style={{ margin: 0 }}>
        <Row>
          <Col size="md-12">
            <Header />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Search />
          </Col>
        </Row>
      </Container>
  );
}

export default App;
