import React from 'react';
import Home from './components/Home';
import Menu from './components/Menu';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { InfoPro } from './components/InfoPro';
import { Portfolio } from './components/Portfolio';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div
          style={{
            display: 'flex',
            writingMode: 'vertical-rl',
            text-orientation: sideways;
          }}
        >
          <Route exact path="/" component={Home} />
          <Menu
            style={{
              writingMode: 'vertical-rl',
              transform: 'scale(-1)',
            }}
          />
        </div>
        <Route exact path="/about" component={About} />
        <Route exact path="/infoPro" component={InfoPro} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
