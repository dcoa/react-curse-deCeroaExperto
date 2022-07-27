import { useState, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext)
    const [navHidden, setNavHidden] = useState(true);
    const handleMenu = () => { setNavHidden(!navHidden); }

    const navigate = useNavigate()
    const handleLogout = () => {
        const action = { type: types.logout }
        dispatch(action)
        localStorage.removeItem('user');
        navigate('/login', {
            replace: true
        })
    }

    return (
        <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link
                    className="block px-3 py-2 text-white"
                    to="/"
                >
                    HEROES APP
                </Link>
                <button onClick={handleMenu} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className={`${!navHidden && 'hidden'} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg className={`${navHidden && 'hidden'} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                <div className={`${navHidden && 'hidden'} w-full md:w-5/6 md:flex md:justify-between`} id="mobile-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <NavLink
                            className={({ isActive }) => isActive ? 'block px-3 py-2 rounded-md bg-sky-500 text-white' : 'block px-3 py-2 rounded-md text-slate-300 ring-1 ring-slate-700 hover:ring-sky-400'}
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => isActive ? 'block px-3 py-2 rounded-md bg-sky-500 text-white' : 'block px-3 py-2 rounded-md text-slate-300 ring-1 ring-slate-700 hover:ring-sky-400'}
                            to="/dc"
                        >
                            DC
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => isActive ? 'block px-3 py-2 rounded-md bg-sky-500 text-white' : 'block px-3 py-2 rounded-md text-slate-300 ring-1 ring-slate-700 hover:ring-sky-400'}
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </ul>

                    <div className="space-x-3">
                        <ul className="flex flex-col md:flex-row md:items-center">
                            <span
                                className="text-sky-400 px-3 py-4 md:py-0"
                            >{user.name}</span>
                            <button
                                className={'block px-3 py-2 rounded-md text-slate-300 ring-1 ring-slate-700 hover:ring-sky-400'}
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

