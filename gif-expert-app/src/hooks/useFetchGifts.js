import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifts'
export const useFetchGifts = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
            .then(img => setState({
                data: img,
                loading: false
            }))
        //El arreglo de dependencias esta vacio solo se ejecuta 1 unica vez
        //si cambia el valor de category vuelve y hace la petición (en este caso el valor no cambia)
    }, [category])

    return state;
}