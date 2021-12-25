import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../01-useState/counter.css'
import { Small } from './Small'

export const Memorize = () => {
    const {counter, increment} = useCounter(10)
    // al cambiar este state el componente small vuelve y se renderiza
    // se evita al agregar el memo
    const [show, setShow] = useState(true )
    return (
        <div>
            <h1>Memorize</h1>
            <p> Counter : <Small value={counter}/></p>

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
