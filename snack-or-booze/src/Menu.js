// Menu.js
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from "reactstrap";

const Menu = ({ items, categoryPath }) => {
  return (
    <section className="col-md-4">
      {items.map((item) => (
        <Card key={item.id}>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">{item.name}</CardTitle>
            <CardText>
              {item.description}
              <h3>Recipe</h3>
              {item.recipe}
            </CardText>
            <ListGroup>
              <Link to={`/${categoryPath}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            </ListGroup>
          </CardBody>
        </Card>
      ))}
    </section>
  );
};

export default Menu;
