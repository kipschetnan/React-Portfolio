import React from "react";
import '../../styles/Resume.css'

function Resume() {

    return (
        <div>
            <header style={{
                fontFamily: 'MyFont',
                marginLeft: '40px',
                fontSize: '25px',
                marginTop: '20px',
                color: '#0A090C'
            }}>
                Resume
            </header>
            <p className='p'>
                Take a look at my <a href='https://docs.google.com/document/d/1F_FuOWeQD6PrfEnfdWs4sHyyEr1g6D9e2ahzutDStJ8/edit?usp=sharing'>resume</a>
            </p>
            <div>
                <header style={{
                fontFamily: 'MyFont',
                marginLeft: '40px',
                fontSize: '25px',
                marginTop: '20px',
                color: '#0A090C'
            }}>
                    Front-end Proficiencies
                </header>
                <ul className="list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div>
                <header style={{
                fontFamily: 'MyFont',
                marginLeft: '40px',
                fontSize: '25px',
                marginTop: '20px',
                color: '#0A090C'
            }}>
                    Back-end Proficiencies
                </header>
                <ul className="list">
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>GraphQL</li>
                    <li>REST</li>
                </ul>
            </div>
        </div>
    )
}

export default Resume