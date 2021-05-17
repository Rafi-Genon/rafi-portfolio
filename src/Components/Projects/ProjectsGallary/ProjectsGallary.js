import React from 'react';
import bpl from '../../../Images/ProjectsGallary/bpl.png'
import businessGrur from '../../../Images/ProjectsGallary/businessGuru.png'
import fastRider from '../../../Images/ProjectsGallary/Fast rider.png'
import superLeage from '../../../Images/ProjectsGallary/superLeage.png'
import superCars from '../../../Images/ProjectsGallary/SuperCars.png'
import './ProjectsGallary.css'

const ProjectsGallary = () => {
    return (
        <div class="container">
            <div className="row justify-content-around">

                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="projectGallaryItems shadow">
                        <img className="project-gallary-img" src={businessGrur} alt="" />
                        <h3 className="text-center p-4">Business Guru</h3>
                        <div className="d-flex justify-content-around">
                            <p>Live</p>
                            <p>GitHub</p>
                            <p>Server</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="projectGallaryItems shadow">
                        <img className="project-gallary-img" src={superLeage} alt="" />
                        <h3 className="text-center p-4">Super Teams</h3>
                        <div className="d-flex justify-content-around">
                            <p>Live</p>
                            <p>GitHub</p>
                            <p>Server</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="projectGallaryItems shadow">
                        <img className="project-gallary-img" src={bpl} alt="" />
                        <h3 className="text-center p-4">BPL Team</h3>
                        <div className="d-flex justify-content-around">
                            <p>Live</p>
                            <p>GitHub</p>
                            <p>Server</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="projectGallaryItems shadow">
                        <img className="project-gallary-img-row2" src={superCars} alt="" />
                        <h3 className="text-center p-4">Super Cars Shop</h3>
                        <div className="d-flex justify-content-around">
                            <p>Live</p>
                            <p>Server</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="projectGallaryItems shadow" >
                        <img className="project-gallary-img-row2" src={fastRider} alt="" />
                        <h3 className="text-center p-4">Fast Rider</h3>
                        <div className="d-flex justify-content-around">
                            <p>Live</p>
                            <p>GitHub</p>
                            <p>Server</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsGallary;