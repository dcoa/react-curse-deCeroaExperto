import React, { useState } from 'react'
import '../01-useState/counter.css'
import { MultipleCutomHooks } from '../03-examples/MultipleCutomHooks'

// este ejemplo el useRef se usa en el useFech que esta en el MultipleCutomHooks para evitar que haga el llamado a la api con el componete desmontado
export const RealExampleRef = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
        <h1>useRef real use case</h1>  
         <hr/>
        <button className=' btn btn-outline-success mb-5' 
        onClick={() => setShow(!show)}
        >Show quotes</button>
         {show && <MultipleCutomHooks/>}

        </div>
    )
}
