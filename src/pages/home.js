import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import { useSpring, animated } from 'react-spring';
import { isMobile } from 'react-device-detect';
import data from '../data/data';
import { Link } from 'gatsby';
import { Button, Container, Row } from 'react-bootstrap';

function HomePage(props) {

    const page = data.pages[0];

    // fade style
    const style = useSpring(data.fadeIn)

    return(
        <animated.div style={style} className="box">
            <Hero hero={page.hero} />
            <Container fluid={true}>
                <Row className="justify-content-center my-4">
                    <Link to={data.pages[1].path}>
                        <Button variant={"primary"} className="mx-3">
                            Projects
                        </Button>
                    </Link>
                    <Link to={data.pages[2].path}>
                        <Button variant={"secondary"} className="mx-3">
                            Bio
                        </Button>
                    </Link>
                    <a href={data.resume}>
                        <Button variant={"primary"} className="mx-3">
                            Resume
                        </Button>
                    </a>
                </Row>
                <Row className="justify-content-center my-4">
                    <Carousel />
                </Row>
                <Row className="justify-content-center my-4">
                </Row>
            </Container>
        </animated.div>
    );

}

export default HomePage;