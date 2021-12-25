import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../01-useState/counter.css'
export const MultipleCutomHooks = () => {
    const { counter, increment} = useCounter(1)
    const { loading, error, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    //valida si la data existe el !! funciona para volver el null en false
    const {quote, author} = !!data && data[0];

    return (
        <div>
            <h1>Bracking Bad Quotes</h1>
            {loading ?
                <div className='alert alert-info text-center'>
                    Loading...
                </div>
                :
                <blockquote className='blockquote text-right'>
                    <p className='ab-0'>{quote}</p>
                    <footer className='blockquote-footer'>{author}</footer>
                </blockquote>
            }
            {
                !loading && <button className='btn btn-secondary' onClick={()=>increment(1)}>Next quote</button>
            }
        </div>

    )
}
