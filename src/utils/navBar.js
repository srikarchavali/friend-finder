import React from 'react'
import { Link } from 'react-router-dom';
import '../utils/navBar.css'

const NavBar = () => {
    return (
        <nav className='nav-bar'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signUp'>SignUp</Link></li>
                <li><Link to='/user-info'>User Info</Link></li>
            </ul>
        </nav>
        )
}

export default NavBar;