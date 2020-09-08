import React from 'react';

import Carousel from '../components/Carousel';
import SlideView from '../components/SlideView';
import { useSpring, animated } from 'react-spring';

function HomePage(props) {

    // fade style
    const style = useSpring({
        opacity: 1,
        from: { opacity: 0 },
      })

    return(
        <animated.div style={style} className="box">
            <SlideView></SlideView>
            <Carousel></Carousel>
        </animated.div>
    );

}

export default HomePage;