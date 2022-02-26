import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/custom.scss';
import '../styles/App.css';
import '../styles/index.css';
import { Container } from 'react-bootstrap/';
import { Router } from '@reach/router';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';

import data from '../data/data';

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
      <Container className="p-0" fluid={true}>
        <Header pages={pages} />
        <Router>
          <HomePage path={pages[0].path} page={pages[0]} />
          <ProjectsPage path={pages[1].path} page={pages[1]} />
          <AboutPage path={pages[2].path} page={pages[2]} />
        </Router>
        <Footer />
      </Container>
    );
  }

}

export default App;
