import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import ProjectCard from '../components/ProjectCard';
import data from '../data/data';

function ProjectsPage(props) {

    const projects = data.projects;

    return(
        <div>
            <Hero title={props.title} imgSrc={props.imgSrc} />
            <Content>
                <p>{projects[0].title}</p>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
            </Content>
        </div>  
    );

}

export default ProjectsPage;