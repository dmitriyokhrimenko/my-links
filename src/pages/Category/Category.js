import '../../assets/css/App.css';

import { Container, Row, Nav } from 'react-bootstrap';

import { data } from "../../data-stub";
import React from "react";

export function Category(props) {
  const category = data.categories[props.categoryKey];

  return (
      <Container fluid>
        <h1>
            {category.title}
        </h1>
          <Row>
                {category.subcategories ?
                  Object.keys(category.subcategories).map((subcategoryKey) => {
                    const linkItems = category.subcategories[subcategoryKey].map(link => {
                      return (
                        <Nav.Link target={"_blank"} key={link.url} href={link.url}>{link.title}</Nav.Link>
                      )
                    });
                    return (
                      <>
                        <h3>{subcategoryKey}</h3>
                        <Nav defaultActiveKey="/home" className="flex-column">
                          {linkItems}
                        </Nav>
                      </>
                    )
                  })
                  :
                  <h3>Not found</h3>
                }
          </Row>
      </Container>
  );
}
