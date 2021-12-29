const initialState =[{
    id: 1,
    todo: 'Hacer ejercicio',
    done: false
}]

const todoReducer = ( state = initialState, action) => {
//si accion existe busque la kye type
    if(action?.type === 'add') {
        return [...state, action.payload]
    }
    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Concentir Luna',
    done: false
}

//Type es la accion a dedarrollar en el reducer
//Payload va a hacer aquello por lo cual se va a ejecuar la accion, la data
const actionAddNewToDo = {
    type: 'add',
    payload: newTodo
}
todos = todoReducer(todos, actionAddNewToDo);
console.log(todos)