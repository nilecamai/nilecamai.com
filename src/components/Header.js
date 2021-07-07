import React, { useState } from 'react';
import data from '../data/data';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import logo from '../assets/images/logo192.png';

function Header(props) {

  const pages = props.pages

  const [expanded, setExpanded] = useState(false)

    return(
        <Navbar sticky="top" className="border-bottom" bg="white" expand="lg" expanded={expanded}>
            <Navbar.Brand>
              <Link to={pages[0].path} className="nav-home-link">
                { !isMobile && data.title }
                <img src={logo} className="nav-icon"/>
              </Link>
            </Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" onClick={() => setExpanded(expanded ? false : "expanded")}/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to={pages[0].path} onClick={() => setExpanded(false)}>{pages[0].nav}</Link>
                <Link className="nav-link" to={pages[1].path} onClick={() => setExpanded(false)}>{pages[1].nav}</Link>
                <Link className="nav-link" to={pages[2].path} onClick={() => setExpanded(false)}>{pages[2].nav}</Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    );

}

export default Header;