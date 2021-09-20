import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { useSpring, animated } from 'react-spring';
import { isMobile } from 'react-device-detect';

function Project(props) {

    const [hovered, setHovered] = useState(0);

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

    const handleClick = (e) => {
        if (hovered) {
            e.currentTarget.src = project.imgSrc;
        } else {
            e.currentTarget.src = project.imgHover;
        }
        setHovered(!hovered);
    }

    const handleMouseOver = (e) => {
        e.currentTarget.src = project.imgHover;
        setHovered(true);
    }

    const handleMouseOut = (e) => {
        e.currentTarget.src = project.imgSrc;
        setHovered(false);
    }

    let projectHero = (
        <Col className="justify-content-center my-auto">
            <Row className="justify-content-center">
                <img className="n-image" src={project.imgSrc}
                        onClick={e => handleClick(e)}
                        onMouseOver={e => handleMouseOver(e)}
                        onMouseOut={e => handleMouseOut(e)}
                        style={{transform: `${hovered ? 'scale(1.1,1.1)' : 'scale(1,1)'}`, transition: '0.5s'}}
                />
                { project.buttonLabel &&
                    <Button className="n-project-button" variant="outline-primary" href={project.buttonLink}>
                        {project.buttonLabel}
                    </Button>
                }
                { project.imageButton &&
                    <a href={project.imageButton.link}><img alt={project.imageButton.alt} src={project.imageButton.imgSrc} className="n-project-button"/></a>
                }
            </Row>
        </Col>
    )

    return(
        <animated.div className="n-project-container">
            { isMobile && 
                <Row className="py-3">
                    { projectHero }
                </Row> 
            }
            <Row>
                { !isMobile && projectHero }
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
                    <div className="py-3">
                        {project.description}
                    </div>
                </Col>
            </Row>
        </animated.div>
    );

}

export default Project;