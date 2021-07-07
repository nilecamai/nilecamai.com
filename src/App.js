import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap/';
import { HashRouter as HashRouter, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

import data from './data/data';
import ProjectsPage from './pages/ProjectsPage';

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
        <ScrollToTop />
        <Container className="p-0" fluid={true}>
          
          <Header pages={pages} />

          <Route path={pages[0].path} exact render={() => <HomePage /> } />
          <Route path={pages[1].path} render={() => <ProjectsPage page={pages[1]} /> } />
          <Route path={pages[2].path} render={() => <AboutPage page={pages[2]} /> } />

          <Footer />

        </Container>
      </HashRouter>
    );
  }

}

export default App;
