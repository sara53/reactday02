import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    console.log("1- initalization");
    super();
  }

  componentDidMount() {
    console.log("3-DidMount");
  }
  componentDidUpdate() {
    console.log("After update on state");
  }
  componentWillUnmount() {
    console.log("dsffgh");
  }
  state = {
    title: "Component Title",
    count: 0,
  };

  changeTitle = () => {
    this.setState({
      title: "New Title",
    });
  };
  increase = () => {
    this.setState({
      count: (this.state.count += 1),
    });
  };
  decrease = () => {
    this.setState({
      count: (this.state.count -= 1),
    });
  };
  render() {
    console.log("2- render Method");
    return (
      <div className="alert alert-secondary p-5 text-center">
        <div className="container">
          <h2 className="">{this.state.title}</h2>
          <p className="fs-3">
            Count is :{" "}
            <strong className="text-danger">{this.state.count}</strong>
          </p>
          <div className="row">
            <div className="col-sm-4">
              <button className="btn btn-success" onClick={this.increase}>
                +
              </button>
            </div>
            <div className="col-sm-4">
              <button className="btn btn-dark" onClick={this.decrease}>
                -
              </button>
            </div>
            <div className="col-sm-4">
              <button className="btn btn-info" onClick={this.changeTitle}>
                Change Title{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// let person = { fname: "mona",color:'red' };

// // reassign
// person2 = {fname :'ali'}
// Object.assign(person,person2)
