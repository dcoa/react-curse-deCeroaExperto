import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCostmHook = () => {
const {state, increment, decrement, reset} = useCounter(50);

    return (
        <>
        <h1>Counter with hook: {state} </h1>
        <hr/>
        <button className="btn btn-secondary"
            onClick= {() => increment(1)}
        > +1 </button>
        <button className="btn btn-primary"
            onClick= {reset}
        > Reset </button>
        <button className="btn btn-secondary"
        onClick= {() => decrement(3)}> -3 </button>
        </>
    )
}
