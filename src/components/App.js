import '../App.css';

import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  Image
} from 'react-bootstrap';

import { data } from "../data-stub";
import React from "react";
import ROUTES, { RenderRoutes } from "../routes";
import { Link } from "react-router-dom";


const categoriesRender = (data) => Object.keys(data.categories).map((categoryKey) => {
    const category = data.categories[categoryKey];
    return (
        <Link key={category.id} to={category.path}>{category.title}</Link>
    )
});

function App() {
  return (
      <Container fluid>
        <Row>
          <Navbar bg="light" expand="lg">
            <Container fluid>
              <Image src={"/header-left.png"} className={'header-logo'}></Image>
              <Image src={"/header-right.png"} className={'header-logo'}></Image>
            </Container>
          </Navbar>
        </Row>
        <Row>
          <Col xs={2}>
            <Nav defaultActiveKey="/home" className="flex-column">
              { categoriesRender(data) }
            </Nav>
          </Col>
          <Col xs={10}>
              <RenderRoutes routes={ROUTES} />
          </Col>
        </Row>
      </Container>
  );
}

export default App;
