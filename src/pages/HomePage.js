import React from 'react';

import Carousel from '../components/Carousel';
import SlideView from '../components/SlideView';
import { useSpring, animated } from 'react-spring';
import data from '../data/data';

function HomePage(props) {

    const page = props.page;

    // fade style
    const style = useSpring(data.fadeIn)

    return(
        <animated.div style={style} className="box">
            <SlideView></SlideView>
            <Carousel></Carousel>
        </animated.div>
    );

}

export default HomePage;