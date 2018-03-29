import React from 'react';

import '../../index.css';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Link} from "react-router-dom";

export default class SideMenu extends React.Component {
  render(){
    return(
      <div className="side-menu">
        <nav class="navbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a className="navbar-brand" id="title">SWAPR</a>
            </li>
            <li class="nav-item">
              <a href="#">Dashboard</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
