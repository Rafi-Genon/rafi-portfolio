import React from 'react';
import './ProjectsCard.css'

const ProjectsCard = (props) => {
    const { name, picture, live, git, technologys } = props.project
    console.log(technologys);
    return (
        <div className="row shadow project-card">
            <div className="col-md-6 col-lg-6 ">
                <img className="project-card-img" src={picture} alt="" />
            </div>
            <div className="col-md-6 col-lg-6">
                <h2 className="project-card-title">{name}</h2>
                <p className="project-description mb-3">This website is a freelance website. You can find here services whatever you want to do
                    for your business. We have expert designer, developer & musician</p>
                <div className="d-flex justify-content-around flex-wrap mb-5">
                    {
                        technologys.map(technology => <p className="tech">{technology}</p>)
                    }
                </div>
                <div className="d-flex">
                    <a href={live} target="_blank" rel="noreferrer"><button className="btn btn-primary mr-4"> Live</button></a>
                    <a href={git} target="_blank" rel="noreferrer"><button className="btn btn-primary"> Github</button></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;