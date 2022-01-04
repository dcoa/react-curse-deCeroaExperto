import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <div className='container'>
                <Routes>
                    <Route path="/" exact element={<HomeScreen />} />
                    <Route path="/about" element={<AboutScreen />} />
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="*" element={<div>404 not found</div>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
