import React from 'react';
import RafiProfille from '../../Images/rafi-img.jpg'
import RafiResume from '../../Images/rafisResumev2.pdf'
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <div >
                    <img style={{ borderRadius: '50%', height: '400px' }} src={RafiProfille} alt="" />
                </div>
                <div className="d-flex align-items-center">
                    <div className="d-flex flex-column align-items-center">
                        <h1>Oh Hey, this is Rafi</h1>
                        <p>I am web developer. I develop website with HTML, CSS, Bootstrap,React. Mainly my power is React</p>
                        <a className="btn btn-primary" href={RafiResume} download="Rafi's Resume">Download Resume</a>
                    </div>
                </div>
            </div>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;