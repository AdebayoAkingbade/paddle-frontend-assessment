import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo'

const Navbar = () => {
  return (
    <div className="navbar">
        <Logo />
        <div className="links">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/">Contact</NavLink>
        </div>
    </div>
  )
}

export default Navbar