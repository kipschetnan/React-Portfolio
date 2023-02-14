import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import '../../styles/AboutMe.css'

function About() {
    return (
        <div>
            <header style={{
                fontFamily: 'MyFont',
                marginLeft: '40px',
                fontSize: '25px',
                marginTop: '20px',
                color: '#0A090C'
            }}>
                About Me
            </header>
            <div className='icon'>
                <FontAwesomeIcon icon={faCircleUser} />
            </div>
            <p className='p'>
                I am a graduate from the Full Stack Web Development Bootcamp with the University of Minnesota - St. Paul. 
                Hoping to start my career in web development and to continue learning and developing my skills as a developer.
                I have experience in many languages that include, HTML, JavaScript, CSS, Python, Java, C++. Always striving to be 
                the best at whatever I do and to be the best person I could possibly be. I believe I have a strong work ethic 
                to the point where I feel I need to put in the necessary work to reach expectations and more.
            </p>
        </div>
    )
}

export default About