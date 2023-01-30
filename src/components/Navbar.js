import React from 'react';
import '../styles/Navbar.css'


function Navbar({ currentPage, handlePageChange}) {

    return (
        <div className='navbar'>
            <a href='#about' 
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
                About Me
            </a>
            <a href='#porfolio' 
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
                Portfolio
            </a>
            <a href='#contact' 
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
                Contact
            </a>
            <a href='#resume' 
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
                Resume
            </a>
        </div>
    )
}

export default Navbar