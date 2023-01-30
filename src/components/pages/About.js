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
                This is placement text for now. This is placement text for now. 
                This is placement text for now. This is placement text for now. 
                This is placement text for now. This is placement text for now. 
                This is placement text for now. This is placement text for now. 
                This is placement text for now. This is placement text for now. 
                This is placement text for now. This is placement text for now. 
                This is placement text for now. This is placement text for now. 
                This is placement text for now. This is placement text for now. 
                This is placement text for now. This is placement text for now. 
                This is placement text for now. This is placement text for now. 
            </p>
        </div>
    )
}

export default About