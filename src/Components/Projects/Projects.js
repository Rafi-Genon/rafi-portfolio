import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import projectsData from '../../Data/ProjectsData.json'
import ProjectsCard from './ProjectsCard/ProjectsCard';

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(projectsData)
    }
        , [])
    return (
        <div>
            <div className="p-3 m-3 d-flex row">
                {
                    projects.map(project => <ProjectsCard project={project}></ProjectsCard>)
                }
            </div>
        </div>
    );
};

export default Projects;