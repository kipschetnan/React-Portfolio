import React from 'react'
import '../styles/Header.css'
import Navbar from './Navbar'

function Header() {
    return (
        <header className='header'>
            <div className='headName'>Kip Schetnan</div>
            <div className='headNav'><Navbar /></div>
        </header>
    )
}

export default Header