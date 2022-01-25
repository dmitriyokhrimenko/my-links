import '../assets/css/App.css';
import '../assets/css/Nav.css';

import {
  Container,
  Row,
  Col,
  Navbar,
  Image
} from 'react-bootstrap';

import { data } from "../data-stub";
import React from "react";
import ROUTES, { RenderRoutes } from "../routes";
import { useNavigate } from "react-router-dom";


const categoriesRender = (data) => Object.keys(data.categories).map((categoryKey) => {
    const category = data.categories[categoryKey];
    let navigate = useNavigate();
    return (
      <li key={category.id}>
        <span onClick={() => navigate(category.path)}>{category.title}</span>
      </li>
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
            <Container fluid>
                <nav id="sidebar">
                  <ul className="list-unstyled components mb-5">
                    { categoriesRender(data) }
                  </ul>
                </nav>
            </Container>
          </Col>
          <Col xs={10}>
              <RenderRoutes routes={ROUTES} />
          </Col>
        </Row>
          <footer className="page-footer font-small blue pt-4">
            <div className="footer-copyright text-center py-3">© 2022 Copyright: dm.okhrimenko@gmail.com
            </div>
          </footer>
      </Container>
  );
}

export default App;
