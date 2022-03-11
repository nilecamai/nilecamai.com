import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/custom.scss';
import '../styles/App.css';
import '../styles/index.css';

import HomePage from './home';
class App extends React.Component {
  
  render() {
    return(
      <>
        <HomePage />
      </>
    );
  }

}

export default App;
