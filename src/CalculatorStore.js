import EventEmitter from "events";
import AppDispatcher from "./AppDispatcher";

let initialState ={

    invitado: '',
    pedazo: '',
    porcion: ''
}

let calculator={
    ...initialState
}

class CalculatorStore extends EventEmitter {
    constructor() {
        super();

        AppDispatcher.register(action => {
            console.log(action)
            if (action.type === "RESET") {
                calculator = { ...initialState };
                this.emit("change");
              }
            
            if(action.type ==="INVITADO"){
                calculator.invitado = action.value;
                this.emit("change")
            }
            if(action.type ==="PEDAZO"){
                calculator.pedazo = action.value;
                this.emit("change")
            }
            if(action.type ==="PORCION"){
                calculator.porcion = action.value;
                this.emit("change")
            }
        });
    }
    getState() {
        return calculator;
      }
}

export default new CalculatorStore();