import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import Project from '../components/Project';
import { useSpring, animated } from 'react-spring';
import data from '../data/data';

function ProjectsPage() {

    const page = data.pages[1];

    const style = useSpring(data.fadeIn);
    const projects = data.projects;

    return(
        <animated.div style={style}>
            <Hero hero={page.hero} />
            <Content>
                {
                    projects.map(project => <Project project={project} />)
                }
            </Content>
        </animated.div>  
    );

}

export default ProjectsPage;