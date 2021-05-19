import React from 'react';
import RafiProfille from '../../Images/rafi-img.jpg'
import RafiResume from '../../Images/RafiResume.pdf'
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import ProjectsGallary from '../Projects/ProjectsGallary/ProjectsGallary';
import WhatIDO from '../WhatIDo/WhatIDO';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
    return (
        <div className="">
            <div className="d-flex justify-content-between container">
                <div >
                    <img style={{ borderRadius: '50%', height: '400px' }} src={RafiProfille} alt="" />
                </div>
                <div className="d-flex align-items-center">
                    <div className="d-flex flex-column align-items-center">
                        <h1>Oh Hey, this is <span style={{ color: '#813AFE' }}>Rafi</span></h1>
                        <p style={{ fontWeight: '800px', fontSize: '20px', }} className="text-center p-5">I am web developer. I develop website with HTML, CSS, Bootstrap,React. Mainly my power is React</p>
                        <a className="btn btn-outline-primary" href={RafiResume} download="Rafi's Resume"><FontAwesomeIcon icon={faDownload} /> Download Resume</a>
                    </div>
                </div>
            </div>
            {/* <Projects></Projects> */}
            <WhatIDO></WhatIDO>
            {/* <Contact></Contact> */}
            <ProjectsGallary></ProjectsGallary>
            {/* <button formAction="mailto:md.ahn.rafi@gmail.com">send mail</button> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;