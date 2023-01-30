import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '../styles/Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <a href="https://github.com/kipschetnan">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://twitter.com/KSchetnan">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://linkedin.com/in/kip-schetnan-185860249">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </footer>
    )
}

export default Footer