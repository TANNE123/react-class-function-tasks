import { Component } from "react";

class Kelvin extends Component {
  state = {
    k: 273.15,
    c: 0,
  };

  callBack = (event) => {
    const kelvinValue = parseFloat(event.target.value);

    if (isNaN(kelvinValue)) {
      return ; 
    }

    this.setState({
      k: kelvinValue,
      c: kelvinValue - 273.15,
    });
  };

  callBack2 = (event) => {
    const celsiusValue = parseFloat(event.target.value);

    if (isNaN(celsiusValue)) {
      return ; 
    }

    this.setState({
      c: celsiusValue,
      k: celsiusValue + 273.15,
    });
  };

  render() {
    return (
      <div>
        <div>Kelvin: {this.state.k}</div>
        <div>Celsius: {this.state.c}</div>
        <input placeholder="Enter Kelvin" onChange={this.callBack} type="text" />
        <input placeholder="Enter Celsius" onChange={this.callBack2} type="text" />
      </div>
    );
  }
}

export default Kelvin;
