import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategory }) => {
    const [inputValue, setinputValue] = useState('');

    const handleSubmit = (e) => {
        // eslint-disable-next-line no-unused-expressions
        e.preventDefault();
        if( inputValue.trim().length > 2){
            setCategory(categ => [inputValue, ...categ])
            setinputValue('')
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    placeholder='Escribe lo que quieres buscar y presiona "Enter"'
                    onChange={e => setinputValue(e.target.value)}
                />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}
