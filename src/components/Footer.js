import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import { isMobile } from 'react-device-detect';
import data from '../data/data';

let socialIcons = (
    <Col className="p-0 justify-content-between" md={3} sm={12}>
        <span className="d-flex justify-content-center">
            {
                data.footer.socials.map(link => {
                    return <SocialIcon className="n-social-icon mx-2" url={link} />
                })
            }
        </span>
    </Col>)

let leftFooterAlign = "p-0 justify-content-center d-flex flex-column " + ( isMobile ? "text-center" : "text-left");
let rightFooterAlign = "p-0 justify-content-center d-flex flex-column " + ( isMobile ? "text-center" : "text-right");

function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                { isMobile && socialIcons }
                <Row className="justify-content-between p-3">
                    <Col className={leftFooterAlign} md={3} sm={12}>
                        {data.footer.copyright}
                    </Col>
                        { !isMobile && socialIcons}
                    <Col className={rightFooterAlign} md={3} sm={12}>
                        {data.footer.footnote}
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;