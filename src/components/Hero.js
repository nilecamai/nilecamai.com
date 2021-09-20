import React from 'react';
import { Row, Col, Jumbotron, Container } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';

function Hero(props) {

    const hero = props.hero;

    const titleFont = isMobile ? "display-3 text-center" : "display-1";

    const image =   <Row className="justify-content-center flex-grow-0">
                        { hero.imgSrc != null && <img className="n-image" src={hero.imgSrc} alt={hero.imgSrc} />}
                    </Row>

    return(
        <Jumbotron className="jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center pt-4">
                    <Col md={8} sm={12}>
                        <Container fluid={true}>
                            <Row className="d-flex justify-content-between">
                                <Col className="justify-content-center d-flex flex-column p-0">
                                    { hero.title && <h1 className={"text-center"}>{hero.title}</h1> }
                                    { hero.subTitle && <h3 className="text-center font-weight-light">{hero.subTitle}</h3> }
                                    { hero.bodyText && <h4 className="text-center font-weight-light">{hero.bodyText}</h4> }
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row className="justify-content-center pb-4">
                    {image}
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;