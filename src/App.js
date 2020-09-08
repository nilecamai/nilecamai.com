import React from 'react';
import './App.css';
//import { render } from '@testing-library/react';
import { Container, Navbar, Nav } from 'react-bootstrap/';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import data from './data/data';
import ProjectsPage from './pages/ProjectsPage';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: 'Nile Camai',
      // navbar
      pages: data.pages
    }
  }
  
  render() {

    const pages = this.state.pages;

    return(
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar sticky="top" className="border-bottom" bg="white" expand="lg">
            <Navbar.Brand>Nile Camai</Navbar.Brand>

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
          <Route path={pages[1].path} render={() => <AboutPage title={pages[1].title} imgSrc={pages[1].imgSrc} /> } />
          <Route path={pages[2].path} render={() => <ProjectsPage title={pages[2].title} /> } />
          <Route path={pages[3].path} render={() => <ContactPage title={pages[3].title} /> } />

          <Footer />

        </Container>
      </Router>
    );
  }

}

export default App;
