import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ handleAdd }) => {
    const { formValues, handleInputChange, reset } = useForm({
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValues.description.trim() === '') return;
        const newTodo = {
            id: new Date().getTime(),
            desc: formValues.description,
            done: false
        }
        handleAdd(newTodo)
        reset()
    }
    return (
        <>
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
        </>
    )
}
