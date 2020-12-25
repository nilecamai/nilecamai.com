import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import { useSpring, animated } from 'react-spring';
import data from '../data/data';

function ContactPage(props) {

    const page = props.page;

    const style = useSpring(data.fadeIn);

    return(
        <animated.div style={style}>
            <Hero hero={page.hero} />
            <Content>
                <p>Test</p>
            </Content>
        </animated.div>  
    );

}

export default ContactPage;