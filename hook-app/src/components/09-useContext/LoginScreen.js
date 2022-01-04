import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    const { setUser } = useContext(UserContext)

    return (
        <div>
            <h1>Log in</h1>
            <hr/>
            <button
            className='btn btn-warning'
            onClick={()=>setUser({
                id: new Date().getTime(),
                name: 'Pikachu',
                type: 'Electric'
            })}
            >Log in</button>
        </div>
    )
}
