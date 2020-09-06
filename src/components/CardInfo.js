import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    //const [{ o }, set] = useSpring(() => ({ o: 0 }));

    const [{ o }, set] = useSpring(() => {
        return {
            o: 0,
            config: { mass: 1, tension: 400, friction: 25, precision: 0.00001 }
        }
    });

    return(
        <div className="n-card-test"
            onMouseEnter={() => set({ o: 100 })}
            onMouseLeave={() => set({ o: 0 })}
        >
            <animated.div className="n-card-info" style={{ opacity: o.interpolate(o => `${o}%`) }}>
                <p className="n-card-title">{props.title}</p>
                <p className="n-card-sub-title">{props.subTitle}</p>
                {/* <p href={props.link} target="_blank" rel="noopener noreferrer">Link</p> */}
            </animated.div>
        </div>
    );

}

export default CardInfo;