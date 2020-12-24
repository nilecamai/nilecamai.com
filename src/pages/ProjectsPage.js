import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import Project from '../components/Project';
import { useSpring, animated } from 'react-spring';
import data from '../data/data';

function ProjectsPage(props) {

    const style = useSpring(data.fadeIn);
    const projects = data.projects;

    return(
        <animated.div style={style}>
            <Hero title={props.title} imgSrc={props.imgSrc} />
            <Content>
                <Project project={projects[0]}></Project>
            </Content>
        </animated.div>  
    );

}

export default ProjectsPage;