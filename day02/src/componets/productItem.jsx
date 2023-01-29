import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

export default class ProductItem extends Component {
  cardTitle = "Coffe 1";

  clickHandler = () => {
    console.log("Btn Clicked");
    console.log(this.cardTitle);
  };
  render() {
    return (
      <Card className="col-sm-6">
        <Card.Img variant="top" src={this.props.product.imgSrc} />
        <Card.Body>
          <Card.Title>{this.props.product.title}</Card.Title>
          <Card.Text>{this.props.product.quntity}</Card.Text>
          <Button variant="warning" onClick={this.clickHandler}>
            Buy Now !
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
