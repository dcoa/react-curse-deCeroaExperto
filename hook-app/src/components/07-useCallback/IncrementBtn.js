import React from 'react'
// Memo para evitar re-renderizados
export const IncrementBtn = React.memo(({ increment }) => {
    console.log('increment componet')
    return (
        <button
        className='btn btn-outline-success m-2'
        onClick={ () => increment(8) }
        > Increment </button>
    )
})
