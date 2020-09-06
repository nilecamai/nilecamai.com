import React from 'react';
import './App.css';
//import { render } from '@testing-library/react';
import { Container, Navbar, Nav } from 'react-bootstrap/';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import aboutImage from './assets/images/portrait.jpg';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: 'Nile Camai',
      // navbar 
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/' },
        { title: 'Contact', path: '/' }
      ],
      home: {
        title: 'Hi there.',
        subTitle: 'I\'m Nile',
        bodyText: 'uw student lol',
        imgSrc: aboutImage
      },
      about: {
        title: 'About Me',
        imgSrc: aboutImage
      },
      contact: {
        title: 'hmu'
      }
    }
  }
  
  render() {
    return(
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Nile Camai</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} bodyText={this.state.home.bodyText} imgSrc={this.state.home.imgSrc} /> } />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} imgSrc={this.state.about.imgSrc} /> } />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} /> } />

          <Footer />

        </Container>
      </Router>
    );
  }

}

export default App;
