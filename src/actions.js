import AppDispatcher from "./AppDispatcher";

    export const reset = () => {
        const action = {
        type: "RESET"
        };
        AppDispatcher.dispatch(action);
    };
    export const handleInvitados = value => {
        const action = {
          type: "INVITADO",
          value
        };
        AppDispatcher.dispatch(action);
    };
    export const handlePedazo = value => {
        const action = {
          type: "PEDAZO",
          value
        };
        AppDispatcher.dispatch(action);
    };
    export const handlePorcion = value => {
        const action = {
          type: "PORCION",
          value
        };
        AppDispatcher.dispatch(action);
    };

    
