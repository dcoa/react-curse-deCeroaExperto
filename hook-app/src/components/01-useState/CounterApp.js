import React, { useState } from 'react';
import './counter.css'

export const CounterApp = () => {
    const [counter, setcounter] = useState({
        counter1: 10,
        counter2: 15
    });

    // dejo el estado inicial en el use State y aqui extrigo las propiedades que voy a usar
    // y poder usar el spread al actualizar solo algunos campos del objeto
    const {counter1, counter2} = counter;
    return (
        <>
           <h1>Counter 1 { counter1 }</h1>
           <h1>Counter 2 { counter2 }</h1> 
           <hr/>

           <button className="btn btn-primary"
           onClick = { () => setcounter({ ...counter, counter1: counter1 + 1})}
           >
               +1
           </button>
        </>
    )
}
