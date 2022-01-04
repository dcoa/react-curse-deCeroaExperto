import React, { useContext } from 'react'
import { UserContext } from './UserContext'


export const AboutScreen = () => {
    const { setUser } = useContext(UserContext)

    return (
        <div>
            <h1>Log out</h1>
            <hr/>
            <button
            className='btn btn-warning'
            onClick={()=>setUser({})}
            >Log out</button>
        </div>
    )
}
