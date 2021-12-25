import React, { memo } from 'react'

// memo es una funcion que me permite devolver el elemento guardado, es decir, 
// solo lo va a renderizar mas de una vez cuando cambie la propiedades
export const Small = memo(({ value }) => {
    console.log('small')
    return (
        <small>
            { value }
        </small>
    )
})
