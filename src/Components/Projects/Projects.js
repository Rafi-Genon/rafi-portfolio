import React, { useEffect, useState } from 'react';
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
            <div className=" d-flex row">
                {
                    projects.map(project => <ProjectsCard key={project._id} project={project}></ProjectsCard>)
                }
            </div>
        </div>
    );
};

export default Projects;