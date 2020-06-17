import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import { About } from './components/About';
import { Formation } from './components/Formation';
import { Work } from './components/Work';
import { APPContainer } from './components/style/homeStyle';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <APPContainer>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/formation" component={Formation} />
          <Route path="/portfolio" component={Work} />
          <Menu />
        </APPContainer>
      </Router>
    </div>
  );
}

export default App;
