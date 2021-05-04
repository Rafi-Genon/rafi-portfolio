import React from 'react';
import './Resume.css'
import RafiResume from '../../Images/rafisResumev2.pdf'
const Resume = () => {
    return (
        <div className="container shadow p-5 rounded mb-5">
            <div className="my-profile row">
                <div className="col-lg-6 col-md-6">
                    <h2 className="resume-title">Md. Abul Hasan Nur Rafi</h2>
                    <h5 className="mb-4">High voltage powered developer</h5>
                    <p className="my-info">Email: <a href="mailto:md.ahn.rafi@gmail.com">md.ahn.rafi@gmail.com</a></p>
                    <p className="my-info">Mobile: +8801619210676</p>
                    <p className="my-info">Portfolio site: <a href="https://agitated-shaw-6a507f.netlify.app/">https://agitated-shaw-6a507f.netlify.app/</a></p>
                    <p className="my-info mb-3">Github: <a href="https://github.com/Rafi-Genon">https://github.com/Rafi-Genon</a></p>
                </div>
                <div className="col-lg-6 col-md-6  ">
                    <a className="btn btn-primary" href={RafiResume} download="Rafi's Resume">Download Resume</a>
                </div>
            </div>
            <u><h5 className="mt-4">MY PROGRAMMING SKILLS</h5></u>
            <ul>
                <li> Comfortable: JavaScript, ES6, React, Bootstrap, HTML, CSS, JSX, Reat Router,</li>
                <li>Familiar: Material UI, Firebase, JWT, Mongodb, Nodejs</li>
                <li>Tools: Chrome, VSCode, Git, Heroku, Firebase, Netlify</li>
            </ul>
            <u><h5 className="mt-4">My Projects</h5></u>
            <ol>
                <li className="mt-4"><span className="resume-project-title">Business Guru (14-April-2021 to 18-April-2021)</span>
                    <ul>
                        <li >This website is a freelance website. You can find here services whatever you want to do for your business. We have expert designer, developer & musician</li>
                        <li> <span className="resume-project-title">Technologys</span> I have used HTML, css, javascript, jsx, react, react-router, bootstrap, react-bootstrap, font-awsome, react-font-awsome, custom api, git-hub, firebase, node, mongodb.
                            <ul>
                                <li>Live Site: <a href="https://business-guru-11f99.web.app/" target="_blank"> https://business-guru-11f99.web.app/</a></li>
                                <li>Client Code: <a href="https://github.com/Rafi-Genon/business-guru" target="_blank"> https://github.com/Rafi-Genon/business-guru</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="mt-4"><span className="resume-project-title">Super Cars Shop (25-March-2021 to 29-March-2021)</span>
                    <ul>
                        <li> This website is fully dynamic made with super-fast reactJS. You can hire your car or motorcycle for your journey.</li>
                        <li><span className="resume-project-title">Technologys</span> I have used HTML, css, javascript, jsx, react, react-router, bootstrap, react-bootstrap, font-awsome, react-font-awsome, custom api, git-hub.
                            <ul>
                                <li>Live Site: <a href="https://super-cars-shop.web.app/Client">https://super-cars-shop.web.app/Client</a></li>
                                <li>Client  Code: <a href="https://github.com/Rafi-Genon/super-cars-shop">https://github.com/Rafi-Genon/super-cars-shop</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ol>
            <u><h5 className="mt-4">My Objective</h5></u>
            <p className="mb-5">I am a High voltage powered developer. I can do everything with my lovely google’s help. I can adapt any language or framework or anything.</p>
        </div>
    );
};

export default Resume;