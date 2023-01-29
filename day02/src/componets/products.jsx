import React, { Component } from "react";
import ProductItem from "./productItem";

export default class Products extends Component {
  pClassName = "text-danger";
  render() {
    return (
      <div className="bg-light p-5">
        <div className="container">
          <h2 className={`text-center mb-4 ${this.pClassName}`}>
            {this.props.sectionTitle}
          </h2>
          <p>{this.props.des}</p>
          <div className="row ">
            {this.props.productList.map((product, index) => {
              return <ProductItem key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
