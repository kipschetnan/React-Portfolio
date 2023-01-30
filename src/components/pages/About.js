import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import React from "react";

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
            <div style={{
                color: '#0A090C',
                fontSize: '70px',
                marginLeft: '50px',
            }}>
                <FontAwesomeIcon icon={faCircleUser} />
            </div>
            <p style={{
                color: '#0A090C',
                marginLeft: '40px',
                fontFamily: 'MyFont2',
                fontWeight: 'bold',
                marginTop: '25px',
                fontSize: '15px',
                marginRight: '40px'
            }}>
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