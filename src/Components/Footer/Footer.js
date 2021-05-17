import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Footer.css'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <div className="mt-5">
            <div className="text-center"> <a className="btn btn-outline-info" href="mailto:md.ahn.rafi@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> Email me</a></div>
            <div className="d-flex justify-content-center">
                <div style={{ width: '20%' }} className="d-flex justify-content-around">
                    <a className="footer-logo" rel="noreferrer" href="https://www.facebook.com/rafi.genon/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a className="footer-logo" style={{ color: 'black' }} rel="noreferrer" href="https://github.com/Rafi-Genon" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                    <a className="footer-logo" rel="noreferrer" href="https://www.linkedin.com/in/md-abul-hasan-nur-rafi-aa3509209/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;