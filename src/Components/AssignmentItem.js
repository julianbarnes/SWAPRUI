import React from 'react';

import '../index.css';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Link} from "react-router-dom";

export default class AssignmentItem extends React.Component {
  render(){
    return(
      <li className="card">
        {this.props.assignment.dueDate}
        <div class="pull-right">
          <Link to="/Assignment">
            <p>{this.props.assignment.title}</p>
          </Link>
        </div>
      </li>
    );
  }
}
