import { useState } from "react"

export const useCounter = (initialState = 10) => {
    const [counter, setCounter] = useState(initialState);

    // el usuario ingresa el valor en el cual se incrementa el estado
    const increment = (factor) => {
        setCounter(counter + factor)
    };
    // el usuario ingresa el valor en el cual se decrementa el estado
    const decrement = (factor) => {
        setCounter(counter - factor)
    };
    // el usuario reestablece el contador
    const reset = () => {
        setCounter(initialState)
    };
    return {
        counter,
        reset,
        increment,
        decrement
    }
}
