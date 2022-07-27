import { useContext } from 'react';
import { useNavigate } from "react-router-dom"
import { types } from "../../types/types"
import { AuthContext } from '../../auth/authContext';


export const LoginScreen = () => {
    const {dispatch} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Local Storage Name',
            }
        }
        dispatch(action)
        const lastPath = localStorage.getItem('lastPath') ||'/';
        navigate(lastPath, {
            replace: true
        })
    }
    return (
        <div className="p-5 bg-slate-800">
            <div className="w-full border-b border-gray-300 mb-5 pb-5">
                <h1 className="text-2xl	text-slate-300">Login</h1>
            </div>
            <button
                className="block px-3 py-2 rounded-md text-slate-300 ring-1 ring-slate-700 hover:ring-sky-400"
                onClick={handleLogin}
            >Login</button>
        </div>
    )
}