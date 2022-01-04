import React from 'react'
import { NavLink } from "react-router-dom";

//NavLink y Link hacen lo mismo la diferencia es que el navlink muestra el activo
export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span class="navbar-text mx-4">
                useContext App
            </span>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Log in</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    )
}
