import React from 'react';
import { Row, Col, Jumbotron, Container } from 'react-bootstrap';

function Hero(props) {

    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        <Row className="justify-content-center centered">
                            <Col className="justify-content-center">
                                { props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1> }
                                { props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3> }
                                { props.bodyText && <h3 className="lead font-weight-light">{props.bodyText}</h3> }
                            </Col>
                            <Col>
                                <Row className="justify-content-center">
                                    <img className="n-hero-image" src={props.imgSrc} alt={props.imgSrc} />
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;