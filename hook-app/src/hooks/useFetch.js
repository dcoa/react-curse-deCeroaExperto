import React, { useEffect, useState, useRef } from 'react'

export const useFetch = ( url ) => {
    const isMounted = useRef(true);
    const [state, setstate] = useState({data: null, loading: true, error: null})

         
    useEffect(() => {
        
        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect(() => {
        // Realiza el fetch del componente que llama el use fetch solo si esta montado
        // limpiar el estado anterior antes de hacer el nuevo llamado al api
        setstate({data: null, loading: true, error: null})
        fetch( url )
        .then( resp => resp.json())
        .then(resp => {
            if( isMounted.current ) {

            setstate({error: null, loading: false, data: resp})
            }
        })
        .catch( () => setstate({data: null, loading: false, error: 'No se pudo cargar la info'}))
        

    }, [url])

    return state;
}
