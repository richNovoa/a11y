import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';
import Home from './home';
import Forms from './forms';
import Tables from './tables';
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Hello World</h1>
          <ul className="header">
            <li><NavLink to="./home">Home</NavLink></li>
            <li><NavLink to="./forms">Forms</NavLink></li>
            <li><NavLink to="./tables">Tables</NavLink></li>
          </ul>
          <div className="content">
             <Route path="./home" component= {Home}/>
             <Route path="./forms" component= {Forms}/>
             <Route path="./tables" component= {Tables}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;