import React from "react"
import './App.css'
import Header from "./components/Header"
import Resume from './components/pages/Resume'
import About from './components/pages/About'
import Portfolio from './components/pages/Portfolio'
import Contact from './components/pages/Contact'
import Footer from './components/Footer'
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('Contact')

  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />
    }
    if (currentPage === 'About') {
      return <About />
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />
    }
    return <Resume />
  };

  const handlePageChange = (page) => setCurrentPage(page)

  return (
    <div style= {{
      backgroundColor: '#F0EdEE',
      height: '100vh'
    }}>
      <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />

      </div>
      <div>{renderPage()}</div>
      <div>
        <Footer />
      </div>
    </div>

  );
}

export default App
