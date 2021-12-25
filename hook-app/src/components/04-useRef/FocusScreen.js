import React, { useRef } from 'react'
import '../01-useState/counter.css'
// este es el caso basico pero no muy usado realmente
export const FocusScreen = () => {
    const focus = useRef();

    const handleClick = () => {
        focus.current.select()
    }
    return (
        <div>
            <input
             type="text"
             name="name"
             className="form-control"
             placeholder="Nombre"
             autoComplete="off"
             ref={focus}
             />
            <button className=' btn btn-outline-success mt-5' 
            onClick={handleClick}
            >Focus</button>
        </div>
    )
}
