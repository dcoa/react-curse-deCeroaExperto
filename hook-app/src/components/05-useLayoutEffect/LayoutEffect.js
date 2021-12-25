import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './layout.css'
export const Layout = () => {
    const { counter, increment} = useCounter(1)
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    //valida si la data existe el !! funciona para volver el null en false
    const {quote} = !!data && data[0];
    const quotePar = useRef();
    const [size, setSize] = useState({});
    useLayoutEffect(() => {
        //Funcion del Dom para pbtener dimenciones del tag en este caso de p
        setSize(quotePar.current.getBoundingClientRect());

    }, [quote])

    return (
        <div>
            <h1>Layout Effect</h1>
           
                <blockquote className='blockquote text-right'>
                    <p className='ab-0' ref={quotePar}>{quote}</p>
                </blockquote>
            
            
             <button className='btn btn-secondary' onClick={()=>increment(1)}>Next quote</button>
            
            <pre>{JSON.stringify(size)}</pre>
        </div>

    )
}
