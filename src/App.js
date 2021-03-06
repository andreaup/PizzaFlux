import React, {Component} from "react";
import CalculatorStore from "./CalculatorStore";
import * as actions from "./actions";

import "./Styles.css";

const App = () => {
  return (
    <div>
      <PizzaCalculator />
    </div>
  );
};

class PizzaCalculator extends Component{
  constructor(props) {
    super(props);
    this.state = CalculatorStore.getState();
    
    this.reset = this.reset.bind(this);
    this.handleUpdateGuest = this.handleUpdateGuest.bind(this);
    this.handleUpdatePiece = this.handleUpdatePiece.bind(this);
    this.handleUpdateSlice = this.handleUpdateSlice.bind(this);
    this.updateState = this.updateState.bind(this);


  }

  updateState() {
    console.log (CalculatorStore.getState())
    this.setState(CalculatorStore.getState());
  }

  componentDidMount() {
    CalculatorStore.on("change", this.updateState);
  }

  componentWillUnmount() {
    CalculatorStore.off("change", this.updateState);
  }

  reset = () => {
    actions.reset();
  };

  handleUpdateGuest=(e)=>{
    actions.handleInvitados(e.target.value);
  }
  handleUpdatePiece=(e)=>{
    actions.handlePedazo(e.target.value);
  }
  handleUpdateSlice=(e)=>{
    actions.handlePorcion(e.target.value);
  }

  render(){
    const {invitado, pedazo, porcion} = this.state;
    console.log (invitado,pedazo,porcion)

    let calculoPizza=0;
    if (invitado > 0 && pedazo > 0 && porcion >0) {
      calculoPizza = Math.ceil((invitado * pedazo) / porcion);
    }


    return(
      <div className="App">
      <div className="Calculator">
      <h1>👨🏻‍🍳 CALCULADORA DE PIZZAS 🍕🍕</h1>
      <div className="Formulario">
        <label htmlFor="invitado">Invitad@s :</label>
        <input
          name="invitado"
          type="number"
          placeholder="Ingrese el # de invitados"
          onChange={this.handleUpdateGuest}
          value={invitado}
        />
        <br></br>
        <label htmlFor="pedazo">Pedazos por persona :</label>
        <input
          name="pedazo"
          type="number"
          placeholder="Ingrese el # de pedazos x persona"
          onChange={this.handleUpdatePiece}
          value={pedazo}
        />
        <br></br>
        <label htmlFor="porcion">Porciones por pizza :</label>
        <input
          name="porcion"
          type="number"
          placeholder="Ingrese el # de porciones x pizza"
          onChange={this.handleUpdateSlice}
          value={porcion}
        />

        <p>
          <b>Necesitarán {calculoPizza} pizzas</b>
        </p>
        <button onClick={this.reset}>RESET</button>
      </div>
    </div>
    </div>
    );
  }


}
export default App;


// function App() {
//   return (
//     <div className="App">
//       <WithCalculator
//         render={(handleChange, resetear, calculo, invitado, pedazo, porcion) => (
//           <Calculator
//             handleChange={handleChange}
//             resetear={resetear}
//             calculo={calculo}
//             invitado={invitado}
//             pedazo={pedazo}
//             porcion={porcion}
//           />
//         )}
//       />
//     </div>
//   );
// }

// export default App;
