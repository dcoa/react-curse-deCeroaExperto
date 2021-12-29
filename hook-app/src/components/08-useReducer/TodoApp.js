import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm'
import './style.css'
import { todoReducer } from './todoReducer'

// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender react',
//     done: false
// }]

const init = () => {
    // utilizo or para el retorno evitar el null
    return   JSON.parse(localStorage.getItem('todos')) || []
}
export const TodoApp = () => {
    // init es una funcion que permite declarar el estado inicial de acuerdo con lo que haga
    const [todos, dispatch] = useReducer(todoReducer, [], init);
    //useReducer sin init
    // const [todos, dispatch] = useReducer(todoReducer, initialState,);
    const {formValues, handleInputChange, reset} = useForm({
        description: ''
    })

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);


    const handleSubmit = (e) => {
        e.preventDefault();

        if(formValues.description.trim() === '') return;
        const newTodo = {
            id: new Date().getTime(),
            desc: formValues.description,
            done: false
        }

        const acctionTodoAdd = {
            type: 'add',
            payload: newTodo
        }
        // es al que se le envia la accion
        dispatch(acctionTodoAdd)
        reset()
    }

    const handleDelete = (todoid) => {
        const acctionTodoDelete = {
            type: 'delete',
            payload: todoid
        }
        dispatch(acctionTodoDelete)

    }

    const handleToggle = (todoid)=> {
        dispatch({
            type: 'toggle',
            payload: todoid
        })
    }
    return (
        <div >
            <h1>To Do App: {todos.length}</h1>

            <div className='row'>
                <div className='col-5'>
                    <ul className='list-group list-group-flush'>
                        {
                            todos.map((todo, i) => (
                                <li
                                    key={todo.id}
                                    className='list-group-item'
                                >
                                    <p className={todo.done && 'doneTask'}
                                    onClick={() => handleToggle(todo.id)}
                                    >{i + 1}. {todo.desc}</p>
                                    <button 
                                    className='btn btn-danger'
                                    onClick={() => handleDelete(todo.id)}
                                    >Borrar</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='col-5' >
                    <h4>Agregar nueva tarea</h4>
                    <form className='d-grid gap-2 d-md-block'
                    onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            name="description"
                            placeholder="Nueva tarea"
                            autoComplete="off"
                            className='form-control'
                            onChange={handleInputChange}
                            value={formValues.description}
                        />
                        <button
                            type='submit'
                            className='btn btn-outline-success mt-2'                        >
                            Agregar
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}
