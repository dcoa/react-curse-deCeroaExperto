import React, { useEffect, useReducer } from 'react'
import './style.css'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
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


    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleAdd = (newTodo) => {
        // es al que se le envia la accion
        dispatch({
            type: 'add',
            payload: newTodo
        })

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
                    <TodoList 
                    todos={todos} 
                    handleDelete={handleDelete} 
                    handleToggle={handleToggle}/>
                </div>
                <div className='col-5' >
                    <TodoAdd handleAdd={handleAdd}/>
                </div>
            </div>
        </div>
    )
}
