import React from 'react';
import { useSpring, animated } from 'react-spring';

import data from '../data/data';

import Slide from '../components/Slide';

class Slides extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            properties: data.slides,
            property: data.slides[0]
        }
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Slide item={item} key={item.id} />
        })
    }

    selectSlide(index) {
        this.setState({
            property: data.slides[index]
        })
    }

    render() {

        const {property} = this.state;
        return(
            // figure out how to fade animate between slides
            <animated.div>
                <div className="n-slide">
                    <Slide property={property}></Slide>
                    <div className="n-slides-control">
                        <span onClick={() => this.selectSlide(0)} className="n-dot"></span>
                        <span onClick={() => this.selectSlide(1)} className="n-dot"></span>
                        <span onClick={() => this.selectSlide(2)} className="n-dot"></span>
                    </div>
                </div>
            </animated.div>
        );
    }

}

export default Slides;