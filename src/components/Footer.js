import React from 'react';
import GitHubIcon from './images/github-icon.png';
import LinkedInIcon from './images/linkedin-icon.png';


function Footer() {

    return (
        <div className="footer" id="footer">
        <ul>
            <li><a href="https://github.com/idakukimiya" rel="noreferrer"><GitHubIcon className="icon"></GitHubIcon></a></li>
            <li><a href="https://www.linkedin.com/in/idakukimiya/" rel="noreferrer"><LinkedInIcon className="icon"></LinkedInIcon></a></li>
        </ul>
    </div>
        );
}

export default Footer;