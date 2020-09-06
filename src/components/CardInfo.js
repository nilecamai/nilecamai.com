import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    if(props.selected) {
        console.log("selected " + props.title)
    } else {
        console.log("unselected " + props.title)
    }

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="n-card-info" style={style}>
            <p className="n-card-title">{props.title}</p>
            <p className="n-card-sub-title">{props.subTitle}</p>
            <p href={props.link} target="_blank" rel="noopener noreferrer">Link</p>
        </animated.div>
    );

}

export default CardInfo;