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
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Route exact path="/" component={Home} />
        <Route  path="/about" component={About} />
        <Route exact path="/infoPro" component={InfoPro} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
          <Menu />
        </div>
      </Router>
    </div>
  );
}

export default App;
