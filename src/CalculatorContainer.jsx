import React, { Component } from "react";
import Calculator from "./Calculator";

class CalculatorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invitado: '',
      pedazo: ''
    };
  }

  handlePizzear = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    name === "invitado"
      ? this.setState({ invitado: value })
      : this.setState({ pedazo: value });
  };

  resetear = () => {
    this.setState({ invitado: '', pedazo:'' });
  };

  render() {
    const { invitado, pedazo } = this.state;
    let calculoPizza=0;
    if (invitado > 0 && pedazo > 0) {
      calculoPizza = Math.ceil((invitado * pedazo) / 8);
    }
    return (
      <Calculator
        handlePizzear={this.handlePizzear}
        resetear={this.resetear}
        calculo={calculoPizza}
        invitado={invitado}
        pedazo={pedazo}
      />
    );
  }
}

export default CalculatorContainer;
