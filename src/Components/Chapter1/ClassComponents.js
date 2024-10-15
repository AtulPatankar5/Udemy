import React, { Component } from "react";

export default class ClassComponents extends Component {
  state = {
    counter: 0,
  };

  operation = (props) => {
    let c = this.state.counter;
    if (props === "+") {
      c++;
    } else {
      c--;
    }
    // this.setState((state,props)=>{
    //     return{
    //         counter:c
    //     }
    // },()=>{console.log("Rendered!!")})
    this.setState({ counter: c });
  };

  componentDidMount() {
    console.log("Com Did mount");
  }
  componentWillUnmount() {
    console.log("unmount");
  }

  shouldComponentUpdate() {
    //allows the component to update or not
    return true;
  }
  render() {
    console.log("Render");
    return (
      <div>
        <h1> {this.state.counter}</h1>
        <button onClick={() => this.operation("+")}>Increment</button>
        <button onClick={() => this.operation("-")}>Decrement</button>
      </div>
    );
  }
}
