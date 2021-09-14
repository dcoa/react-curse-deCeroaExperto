import React, { useEffect, useState } from 'react'

export const Message = () => {
    const [cords, setCords] = useState({x:0, y:0})
    const {x, y} = cords;
    // El return es una funcion de limpieza que se ejecuta cuando se desmonta el componente
    // Puede ayudar en el consumo de memoria
    useEffect(() => {
        // funcion que se ejecuta cuando se monta componete
        const movMouse = (e) =>{
            const coords = { x: e.x, y: e.y}
            setCords(coords);
        }
        //añadir el evento
        window.addEventListener('mousemove', movMouse)

        return () => {
            //remover el evento cuando se desmonte el componete
            window.removeEventListener('mousemove', movMouse)
        }
    }, [])

    return (
        <div>
            <h3>Este es un mensaje guiño, guiño</h3>
            <p> x = { x } y = { y }</p>
        </div>
    )
}
