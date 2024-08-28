import { Component } from "react";
import { ErrorToast, SuccessToast } from "../toastify/toastify-help";

class Counter extends Component {
  state = {
    count: 0,
  };

  Increment = () => {
    this.setState({
      count: this.state.count + 1,
    },()=>{
      SuccessToast("hello","top-left")
      console.log("hello");
      
    });
    SuccessToast("hell111o","top-left")
  };
  Decrement = () => {
    this.setState({
      count: this.state.count - 1,
    },()=>{
      SuccessToast(`i am clicked ${this.state.count}`,'top-right')
    });
  };
  Reset = () => {
    this.setState({
      count: 0,
    },()=>{
      ErrorToast(`i am clicked ${this.state.count}`,'top-center')
    });
  };

  render() {
    return (
      <>
        <h2>count{this.state.count}</h2>
        <button onClick={this.Increment}>Increment</button>
        <button onClick={this.Decrement}>Decrement</button>
        <button onClick={this.Reset}>Reset</button>
      </>
    );
  }
}

export default Counter;
