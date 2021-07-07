import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useTransition, animated } from 'react-spring';
import Slide from '../components/Slide';
import { render } from 'react-dom';
import { isMobile } from 'react-device-detect';

import data from '../data/data';

const slides = [
    ({ style }) => <animated.div className="box" style={style}><Slide property={data.slides[0]} /></animated.div>,
    ({ style }) => <animated.div className="box" style={style}><Slide property={data.slides[1]} /></animated.div>,
    ({ style }) => <animated.div className="box" style={style}><Slide property={data.slides[2]} /></animated.div>,
  ]

export default function SlideView() {

    const [index, set] = useState(0);
    const timeoutRef = useRef(null);
    const delay = 5000;
    const platform = isMobile ? "n-slide-mobile" : "n-slide-desktop";

    function SetSlide(slideIndex) {
        return useCallback(() => set(slideIndex), [])
    }

    const transitions = useTransition(index, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                set(state => (state + 1) % 3
            ),
            delay
        );
    }, [index])

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    return (
        <div className={platform}>
            <div className="n-slide-viewer">
                <div className="simple-trans-main">
                    {transitions.map(({ item, props, key }) => {
                        const Slide = slides[item]
                        return <Slide key={key} style={props} />
                    })}
                </div>
                
                { !isMobile && 
                    <div className="n-slides-control">
                        <span onClick={SetSlide(0)} className="n-dot"></span>
                        <span onClick={SetSlide(1)} className="n-dot"></span>
                        <span onClick={SetSlide(2)} className="n-dot"></span>
                    </div>
                }
            </div>
        </div>
    );
}


render(<SlideView />, document.getElementById('root'))