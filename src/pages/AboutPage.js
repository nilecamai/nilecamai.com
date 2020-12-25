import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import { useSpring, animated } from 'react-spring';
import data from '../data/data';

function AboutPage(props) {

    const style = useSpring(data.fadeIn)

    return(
        <animated.div style={style}>
            <Hero title={props.title} imgSrc={props.imgSrc} />
            <Content>
                {data.about}
            </Content>
        </animated.div>  
    );

}

export default AboutPage;