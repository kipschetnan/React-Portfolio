import React from 'react'
import '../styles/Header.css'
import Navbar from './Navbar'

function Header({ currentPage, handlePageChange }) {
    return (
        <header className='header' >
            <div className='headName'>Kip Schetnan</div>
            <div className='headNav'><Navbar currentPage={currentPage} handlePageChange={handlePageChange}/></div>
        </header>
    )
}

export default Header