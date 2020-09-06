import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import { useSpring, animated } from 'react-spring';

function HomePage(props) {

    // fade style
    const style = useSpring({
        opacity: 1,
        from: { opacity: 0 },
      })

    return(
        <animated.div style={style}>
            <Hero title={props.title} subTitle={props.subTitle} bodyText={props.bodyText} imgSrc={props.imgSrc}></Hero>
            <Carousel></Carousel>
        </animated.div>
    );

}

export default HomePage;