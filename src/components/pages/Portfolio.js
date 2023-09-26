import React from "react";
import '../../styles/Portfolio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import city from "../../images/city.jpg"
import mountains from "../../images/mountains.jpg"
import road from "../../images/road.jpg"
import subway from "../../images/subway.jpg"


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
                <div className='grid-item'>
                    <img className='img' src={city} alt="city traffic"/>
                    <a href="https://kipschetnan.github.io/Marvelite-Hub/" className="text">Marvelite Hub</a> 
                    <a href="https://github.com/kipschetnan" className="gitIcon icon1">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
                <div className='grid-item'>
                    <img className='img' src={mountains} alt="city traffic"/>
                    <a href="https://serene-taiga-18669.herokuapp.com/" className="text">My Food Tracker</a>
                    <a href="https://github.com/kipschetnan" className="gitIcon icon2">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
                <div className='grid-item'>
                    <img className='img' src={road} alt="city traffic"/>
                    <a href="https://pure-woodland-23274.herokuapp.com/login" className="text">Tocative</a>
                    <a href="https://github.com/kipschetnan" className="gitIcon icon3">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
                <div className='grid-item'>
                    <img className='img' src={subway} alt="city traffic"/>
                    <a href="" className="text">Project 4</a>
                    <a href="https://github.com/kipschetnan" className="gitIcon icon4">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Portfolio