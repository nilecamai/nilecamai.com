import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import { useSpring, animated } from 'react-spring';
import data from '../data/data';

function AboutPage(props) {

    const style = useSpring(data.fadeIn)

    return(
        <animated.div style={style}>
            <Hero title={props.title} imgSrc={props.imgSrc} />
            <Content>
                <p>Pleased to meet you! My name is Nile Camai, and I'm a Computer Science student at the <strong className="uw-brand-color">University of Washington</strong>. I was born and raised on the Sammamish plateau and am lucky to call the great PNW my home for the next four years!</p>
                <p>Whether it's hardware or software, I love to build things. I participated for four years in the <strong className="frc-brand-color">FIRST® Robotics Competition</strong> as a mechanical team member of the <strong className="shs-brand-color">Spartabots</strong>. Behind the computer screen, I've developed applications with Android, SwiftUI, and Node.js.</p>
                <p>My latest project, built on SocketIO and Express.js, is a multiplayer web game, Poker Chip Simulator. I collaborated with fellow Allen School students Kelvin Ng and Winston Bullen on this project.</p>
                <p>When I'm not coding, I love buying boba, making boba, and drinking boba. Other interests of mine include music, film, photography, and gaming. I like trying new things, seeking discomfort, and making the most out of life.</p>
                <p>On to the next!</p>
            </Content>
        </animated.div>  
    );

}

export default AboutPage;