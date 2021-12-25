import React, { useState, useMemo } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import { useCounter } from '../../hooks/useCounter'
import '../01-useState/counter.css'

export const MemoHook = () => {
    const {counter, increment} = useCounter(10)
    // al cambiar este state el componente la funcion de proceso pesado vuelve y se renderiza
    // se evita al agregar el memo
    const [show, setShow] = useState(true )

    // la funcion y el input es la dependencia
    // la dependencia indica cuando debe volver a memorizar el resultado de la funcion proceso pesado
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])
    return (
        <div>
            <h1>Memo Hook</h1>
            <p> Counter : {counter}</p>
            <h1>{memoProcesoPesado}</h1>
            <button className='btn btn-primary m-3'
            onClick={()=>increment(1)}
            >
                +1
            </button>

            <button className='btn btn-outline-primary m-1'
            onClick={()=>setShow(!show)}
            >
                Show / Hide
            </button>
        </div>
    )
}
