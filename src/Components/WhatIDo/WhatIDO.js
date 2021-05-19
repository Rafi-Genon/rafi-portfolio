import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCode, faMobileAlt, faPencilRuler } from '@fortawesome/free-solid-svg-icons'
import './WhatIDo.css'

const WhatIDO = () => {
    return (
        <div className="bg-light what-i-do-section mt-5" >
            <h3 className="text-center">What I Do</h3>
            <div className="row d-flex justify-content-around what-i-do-container">


                <div className="col-sm-12 col-md-6 col-lg-4 mt-4">
                    <div className="what-i-do-items">
                        <FontAwesomeIcon className="what-i-do-items-icon" icon={faCode} ></FontAwesomeIcon>
                        <h6>Web Development</h6>
                        <p className="what-i-do-items-description">Clean and fresh issue free code to make your website dynamic perfectly.</p>
                        <p className="what-i-do-read-more">Read more <FontAwesomeIcon className="" icon={faArrowRight} ></FontAwesomeIcon></p>
                    </div>
                </div>


                <div className="col-sm-12 col-md-6 col-lg-4 mt-4">
                    <div className="what-i-do-items">
                        <FontAwesomeIcon className="what-i-do-items-icon" icon={faPencilRuler} ></FontAwesomeIcon>
                        <h6>Web design</h6>
                        <p className="what-i-do-items-description">Qualified web design and attractive effects which catches visitor’s Eye.</p>
                        <p className="what-i-do-read-more">Read more <FontAwesomeIcon className="" icon={faArrowRight} ></FontAwesomeIcon></p>
                    </div>
                </div>


                <div className="col-sm-12 col-md-6 col-lg-4 mt-4">
                    <div className="what-i-do-items">
                        <FontAwesomeIcon className="what-i-do-items-icon" icon={faMobileAlt} ></FontAwesomeIcon>
                        <h6>App Development</h6>
                        <p className="what-i-do-items-description">Qualified web design and attractive effects which catches visitor’s Eye.</p>
                        <p className="what-i-do-read-more">Read more <FontAwesomeIcon className="" icon={faArrowRight} ></FontAwesomeIcon></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatIDO;