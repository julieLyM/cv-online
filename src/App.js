import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
 import Menu from './components/MenuT';
import { About } from './components/About';
import { Formation } from './components/Formation';
import { Work } from './components/Work';
import { APPContainer } from './components/style/homeStyle';
// import {SideBar} from "./components/SideBar"
import "./components/style/MenuBurgerStyles.css";
import './App.css';


function App() {
  return (
    <div className="App container">
      <Router>
        <APPContainer>
        {/* <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} class="burger" /> */}
*          <Route exact path="/" component={Home} />
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
