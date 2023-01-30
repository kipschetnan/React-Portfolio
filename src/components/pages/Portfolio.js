import React from "react";
import '../../styles/Portfolio.css'

function Portfolio() {
    return (
        <div>
            <header style={{
                fontFamily: 'MyFont',
                marginLeft: '40px',
                fontSize: '25px',
                marginTop: '20px',
                color: '#0A090C'
            }}>
                Portfolio
            </header>

            <div className='grid'>
                <div className='grid-item'><div className="text">Project 1</div> </div>
                <div className='grid-item'><div className="text">Project 2</div></div>
                <div className='grid-item'><div className="text">Project 3</div></div>
                <div className='grid-item'><div className="text">Project 4</div></div>
            </div>
        </div>
    )
}

export default Portfolio