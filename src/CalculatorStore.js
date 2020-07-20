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
            console.log(action,3);
            if (action.type === "RESET") {
                calculator = { ...initialState };
                this.emit("change");
              }
            
            if(action.type ==="ONCHANGE"){
                calculator[action.name] = action.campo;
                this.emit("change")
            }
        });
    }
    getState() {
        return calculator;
      }
}

export default new CalculatorStore();