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
            textOrientation: ''
          }}
        >
          <Rout path="/" component={Home} />
          <Menu
          />
        </div>
        <Route path="/about" component={About} />
        <Route path="/infoPro" component={InfoPro} />
        <Route  path="/portfolio" component={Portfolio} />
        <Route  path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
