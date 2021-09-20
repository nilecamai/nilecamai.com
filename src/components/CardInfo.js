import React from 'react';
import { useSpring, animated } from 'react-spring';
import { isMobile } from 'react-device-detect';

function CardInfo(props) {
    
    const op = isMobile ? 100 : 0;

    const [{ o }, set] = useSpring(() => {
        return {
            o: op,
            config: { mass: 1, tension: 400, friction: 25, precision: 0.00001 }
        }
    });

    return(
        <div className="n-card-overlay"
            onMouseEnter={() => set({ o: 100 })}
            onMouseLeave={() => set({ o: op })}
        >
            <animated.div className="n-card-info" style={{ opacity: o.interpolate(o => `${o}%`) }}>
                <p className="n-card-title">{props.title}</p>
                <p className="n-card-subtitle">{props.subTitle}</p>
                {/* <p href={props.link} target="_blank" rel="noopener noreferrer">Link</p> */}
            </animated.div>
        </div>
    );

}

export default CardInfo;