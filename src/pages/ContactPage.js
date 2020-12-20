import React from 'react';
import { useSpring, animated } from 'react-spring';
import data from '../data/data';

function ContactPage(props) {

    const style = useSpring(data.fadeIn);

    return(
        <animated.div style={style}>
            <p>Contact</p>
        </animated.div>
    );

}

export default ContactPage;