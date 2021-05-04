import React from 'react';
// import img from '../../../Images/BusinessGuru.png'

const ProjectsCard = (props) => {
    const { name, picture, live, git } = props.project
    console.log(props);
    return (
        <div className="row shadow mt-5 mb-5 rounded">
            <div className="col-md-6 col-lg-6">
                <img style={{ width: '100%' }} src={picture} alt="" />
            </div>
            <div className="col-md-6 col-lg-6">
                <h4>{name}</h4>
                <p>This website is a freelance website. You can find here services whatever you want to do
                    for your business. We have expert designer, developer & musician</p>
                <div>
                    <a href={live} target="_blank"><button className="btn btn-primary"> Live</button></a>
                    <a href={git} target="_blank"><button className="btn btn-primary">Github</button></a>

                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;