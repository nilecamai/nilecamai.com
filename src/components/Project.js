import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'; 

import { useSpring, animated } from 'react-spring';

function Project(props) {

    /* const {
        title,
        imgSrc,
        links,
        icons,
        buttonLink,
        buttonLabel,
        description
    } = props.project; */

    const project = props.project;

    return(
        <animated.div className="n-project-container">
            <Row>
                <Col className="justify-content-center">
                    <Row className="justify-content-center">
                        <img className="n-project-image" src={project.imgSrc} />
                        <Button className="n-project-button" variant="outline-primary">
                            {project.buttonLabel}
                        </Button>
                    </Row>
                </Col>
                <Col className="n-project-text">
                    <p className="n-card-title">{project.title}</p>
                    <p className="n-card-subtitle">{project.description}</p>
                </Col>
            </Row>
        </animated.div>
    );

}

export default Project;