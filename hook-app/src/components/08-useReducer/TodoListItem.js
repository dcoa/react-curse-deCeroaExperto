import React from 'react'
import PropTypes from 'prop-types';

export const TodoListItem = ({ todo, index, handleToggle, handleDelete }) => {
    return (
        <li className='list-group-item'>
            <p className={`${todo.done && 'doneTask'}`}
                onClick={() => handleToggle(todo.id)}
            >
                {index + 1}. {todo.desc}
            </p>
            <button
                className='btn btn-sm btn-danger'
                onClick={() => handleDelete(todo.id)}
            >Borrar</button>
        </li>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
}
