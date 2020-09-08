import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

function ProjectsPage(props) {

    return(
        <div>
            <Hero title={props.title} imgSrc={props.imgSrc} />
            <Content>
                <p>Placeholder text</p>
            </Content>
        </div>  
    );

}

export default ProjectsPage;