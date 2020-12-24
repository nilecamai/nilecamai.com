import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { useSpring, animated } from 'react-spring';
import { isMobile } from 'react-device-detect';

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

    let renderedToolIcons;

    if (project.icons) {
        renderedToolIcons = project.icons.map(icon => {
            return <animated.img className="n-icon" src={icon.src} title={"Built with " + icon.label} />
        })
    }

    let renderedLinks;

    if (project.links) {
        renderedLinks = project.links.map(link => {
            return <span className="n-span"><a className="text-dark" href={link.url}><img className="n-icon" src={link.src}/>{link.label}</a></span>
        })
    }

    let renderedDescription;

    if (project.description) {
        renderedDescription = project.description.map(paragraph => {
            return <p className="n-card-subtitle">{paragraph.line}</p>
        })
    }

    return(
        <animated.div className="n-project-container">
            <Row>
                <Col className="justify-content-center">
                    <Row className="justify-content-center">
                        <img className="n-project-image" src={project.imgSrc} />
                        { project.buttonLabel &&
                            <Button className="n-project-button" variant="outline-primary" href={project.buttonLink}>
                                {project.buttonLabel}
                            </Button>
                        }
                    </Row>
                </Col>
                <Col className="n-project-text">
                    <p className="n-card-title">
                        {project.title}
                        { !isMobile && 
                            <span className="float-right">
                                {renderedToolIcons}
                            </span>
                        }
                    </p>
                    {renderedLinks}
                    { isMobile && 
                        <span className="float-right">
                            {renderedToolIcons}
                        </span>
                    }
                    {renderedDescription}
                </Col>
            </Row>
        </animated.div>
    );

}

export default Project;