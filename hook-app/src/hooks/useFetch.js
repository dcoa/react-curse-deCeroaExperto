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
        if( isMounted.current ) {
        // limpiar el estado anterior antes de hacer el nuevo llamado al api
        setstate({data: null, loading: true, error: null})
        fetch( url )
        .then( resp => resp.json())
        .then(resp => setstate({error: null, loading: false, data: resp}))
        .catch()
        }

    }, [url])

    return state;
}
