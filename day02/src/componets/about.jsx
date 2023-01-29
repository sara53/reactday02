import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class About extends Component {
  /** React Hooks
   * ------------------
   */
  render() {
    return (
      <div
        className={`${this.props.bgColor} ${this.props.fontColor} p-5 text-center text-light`}
      >
        <div className="container">
          <h2>
            <strong className="text-danger"> &hearts;</strong>{" "}
            {this.props.title || "Default Title"}
            <strong className="text-danger"> &hearts;</strong>
          </h2>
        </div>
        <p>{this.props.desc || "Default Description"}</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolor
          at amet quis architecto, id iste ducimus pariatur nesciunt non odit
          molestias sapiente aliquam libero asperiores sed repellendus illo
          eius.
        </p>
        {this.props.children}
      </div>
    );
  }
}
