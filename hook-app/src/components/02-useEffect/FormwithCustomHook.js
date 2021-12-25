import React from 'react'
import "./form.css";
import { useForm } from './useForm';


export const FormwithCustomHook = () => {

    const {formValues, handleInputChange} = useForm({
        name:'',
        email: '',
        password: ''
    })

    const {name, email, password} = formValues;
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formValues);
    } 

    return (
        <form onSubmit={handleSubmit} className='form-custom-hook'> 
         <h1>Forma with Custom Hook</h1>  
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
         <div className="form-group">
             <input
             type="password"
             name="password"
             className="form-control"
             placeholder="***"
             value={password}
             onChange={handleInputChange}
             />
         </div>
         <button type="submit" className="btn btn-warning"> Enviar</button>
        </form>
    )
}
