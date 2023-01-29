import React from 'react';
import '../styles/Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <a href='#about-me'>About Me</a>
            <a href='portfolio'>Portfolio</a>
            <a href='contact'>Contact</a>
            <a href='resume'>Resume</a>
        </div>
    )
}

export default Navbar