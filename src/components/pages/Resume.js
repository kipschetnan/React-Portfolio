import React from "react";
import '../../styles/Resume.css'

function Resume() {
    const onButtonClick = () => {
        fetch('Kip_Schetnan_Resume.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Kip_Schetnan_Resume.pdf';
                alink.click();
            })
        })
    }

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
                Download my <a href='' onClick={onButtonClick}>resume</a>
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