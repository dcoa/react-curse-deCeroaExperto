import React, { useCallback, useState, useEffect } from 'react'
import '../01-useState/counter.css'
import { IncrementBtn } from './IncrementBtn';

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);
    //esta funcion se crea cada vez que se incrementa el contador
    // const increment = () => {
    //     setCounter(counter + 1)
    // };

    // Crea una copia memorizada de la funcion y solo cambia cuando la dependecia [] cambia
    // se usa c para evitar hacer caunter una dependencia
    const increment = useCallback(
        (sum) => {
            setCounter(c => c + sum)

        },
        [setCounter],
    )

    // el segundo caso de uso es cuando se tiene un useEffect y la dependencia es una funcion
    // de esta forma se evita que el efecto se dispare cada vez que se contruya la funcion
    useEffect(() => {

    }, [increment])

    return (
        <div>
            <h1>Callback Hook : {counter}</h1>

            <IncrementBtn increment={increment} />
        </div>

    )
}
