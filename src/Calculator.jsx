import React from "react";

const Calculator = ({ handlePizzear, resetear,calculo, invitado,pedazo }) => {
  return (
    <div className="Calculator">
      <p className="titleCalculator">CLACULADORA DE PIZZAS</p>
      <section className="controls">
      <label htmlFor="invitado">Invitad@s: </label>
      <input
            name ="invitado"
            type="number"
            placeholder ="Ingrese el # de invitados"
            onChange={handlePizzear}
            value={invitado}
     />

      <label htmlFor="pedazo">Pedazos por persona: </label>
      <input
            name = "pedazo"
            type="number"
            placeholder ="Ingrese el # de invitados"
            onChange={handlePizzear}
            value={pedazo}
     />

    <p>Necesitarán {calculo} pizzas</p>
     <button onClick ={resetear}>RESET</button>
     
      
        {/* <button onClick={handleSumar}>Increment</button>
        <button onClick={handleRestar}>Decrement</button>
        <button onClick={resetear}>Reset</button> */}
      </section>
    </div>
  );
};
export default Calculator;
