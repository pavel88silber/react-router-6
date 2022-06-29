import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <header className='header'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/about">About</NavLink>
            </header>

            <main className='Outlet'>
                <Outlet />
            </main>

            <footer className='footer'>2022</footer>
        </>
    )
}

export default Layout