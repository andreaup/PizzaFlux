import AppDispatcher from "./AppDispatcher";

    export const reset = () => {
        const action = {
        type: "RESET"
        };
        AppDispatcher.dispatch(action);
    };
    export const handleChange = value => {
        console.log(2,value)
        const action = {
          type: "ONCHANGE",
          campo: value.campo,
          name: value.name
        };
        AppDispatcher.dispatch(action);
    };

    
