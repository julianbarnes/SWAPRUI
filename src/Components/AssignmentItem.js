import React from 'react';

import '../index.css';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Link} from "react-router-dom";

export default class AssignmentItem extends React.Component {
  render(){
    return(<li className="card">
    <Link to="/Assignment">
      {this.props.assignment.title}
      <p><div class="pull-right">assignment {this.props.assignment.dueDate} at assignment {this.props.assignment.dueTime}</div></p>
      </Link>
      </li>
    );
  }
}
