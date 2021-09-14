import React, { useEffect, useState } from 'react'
import "./form.css";
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setformState] = useState({
        name:'',
        email: '',
    })

    const {name, email} = formState;

    // El arreglo vacio me indica que se ejecute una sola vez cundo se renderice el componte
    useEffect(()=>{
        console.log('hey')
    }, [])

    // creo un nuevo useEffect si necesito prestar atencion a los cambios a algo especifico
    // util en selectores
    useEffect(()=>{
        console.log('solo cuando el email cambia')
    }, [email])

    // computar el valor del target en el objeto
    const handleInputChange = ({target}) => {
        setformState({
            ...formState,
            [target.name]: target.value
        })
    }
    return (
        <>
         <h1>Simple form</h1>  
         <hr/> 
         <div className="form-group">
             <input
             type="text"
             name="name"
             className="form-control"
             placeholder="Nombre"
             autoComplete="off"
             value={name}
             onChange={handleInputChange}
             />
         </div>
         <div className="form-group">
             <input
             type="email"
             name="email"
             className="form-control"
             placeholder="e-mail@email.com"
             autoComplete="off"
             value={email}
             onChange={handleInputChange}
             />
         </div>
         {(name ==='123') && <Message/>}
        </>
    )
}
