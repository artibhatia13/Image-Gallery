import React from 'react';
import Landing from './components/landing';
import Gallery from './components/gallery';
import Navigation from './components/Navigation';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
          <Navigation />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Landing />
            </React.Fragment>
          )} />
          <Route path="/gallery" component ={Gallery} />
        </div>
    </Router>
    
  );
}

export default App;
