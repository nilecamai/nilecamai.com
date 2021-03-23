import React from 'react';
import './App.css';
//import { render } from '@testing-library/react';
import { Container, Navbar, Nav } from 'react-bootstrap/';
import { HashRouter as HashRouter, Route, Link } from 'react-router-dom';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import data from './data/data';
import ProjectsPage from './pages/ProjectsPage';
import logo from './assets/images/logo192.png';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: data.title,
      pages: data.pages,
    }
  }
  
  render() {

    const pages = this.state.pages;

    return(
      <HashRouter>
        <Container className="p-0" fluid={true}>
          <Navbar sticky="top" className="border-bottom" bg="white" expand="lg">
            <Navbar.Brand>
              {data.title}
              <img src={logo} style={{height: "2rem", marginBottom: "0.25rem"}}/>
            </Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to={pages[0].path}>{pages[0].nav}</Link>
                <Link className="nav-link" to={pages[2].path}>{pages[2].nav}</Link>
                <Link className="nav-link" to={pages[1].path}>{pages[1].nav}</Link>
                <Link className="nav-link" to={pages[3].path}>{pages[3].nav}</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path={pages[0].path} exact render={() => <HomePage /> } />
          <Route path={pages[1].path} render={() => <AboutPage page={pages[1]} /> } />
          <Route path={pages[2].path} render={() => <ProjectsPage page={pages[2]} /> } />
          <Route path={pages[3].path} render={() => <ContactPage page={pages[3]} /> } />

          <Footer />

        </Container>
      </HashRouter>
    );
  }

}

export default App;
