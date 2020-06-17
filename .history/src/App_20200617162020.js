import React from 'react';
import Home from './components/Home';
import Menu from './components/Menu';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Formation } from './components/Formation';
import { Work } from './components/Work';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/formation" component={Formation} />
          <Route path="/portfolio" component={Work} />
          <Route path="/contact" component={Contact} />
          <Menu />
        </div>
      </Router>
    </div>
  );
}

export default App;
