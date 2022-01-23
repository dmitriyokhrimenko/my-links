import '../../App.css';

import { Container, Row } from 'react-bootstrap';

import { data } from "../../data-stub";
import React from "react";

export function Category(props) {
  const category = data.categories[props.categoryKey];

    console.log(category.subcategories)

  return (
      <Container fluid>
        <h1>
            {category.title}
        </h1>
          <Row>
                to be continued..
          </Row>
      </Container>
  );
}
