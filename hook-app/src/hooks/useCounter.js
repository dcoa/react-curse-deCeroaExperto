import { useState } from "react"

export const useCounter = (initialState = 10) => {
    const [state, setstate] = useState(initialState);

    // el usuario ingresa el valor en el cual se incrementa el estado
    const increment = (factor) => {
        setstate(state + factor)
    };
    // el usuario ingresa el valor en el cual se decrementa el estado
    const decrement = (factor) => {
        setstate(state - factor)
    };
    // el usuario reestablece el contador
    const reset = () => {
        setstate(initialState)
    };
    return {
        state,
        reset,
        increment,
        decrement
    }
}
