import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <header className='header'>
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About</Link>
            </header>

            <main className='Outlet'>
                <Outlet />
            </main>

            <footer className='footer'>2022</footer>
        </>
    )
}

export default Layout