import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import { isMobile } from 'react-device-detect';

let socialIcons = (
    <Col className="p-0 n-justify-center justify-content-between" md={3} sm={12}>
        <span className="d-flex justify-content-center">
            <SocialIcon className="n-social-icon mx-2" url="https://linkedin.com/in/nile-camai" />
            <SocialIcon className="n-social-icon mx-2" url="https://github.com/nilecamai" />
        </span>
    </Col>)

let leftFooterAlign = "p-0 justify-content-center d-flex flex-column " + ( isMobile ? "text-center" : "text-left");
let rightFooterAlign = "p-0 justify-content-center d-flex flex-column " + ( isMobile ? "text-center" : "text-right");

function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true} className="border-top py-3">
                { isMobile && socialIcons }
                <Row className="justify-content-between p-3">
                    <Col className={leftFooterAlign} md={3} sm={12}>
                        © 2020 by Nile Camai
                    </Col>
                        { !isMobile && socialIcons}
                    <Col className={rightFooterAlign} md={3} sm={12}>
                        Created with love by Nile Camai
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;