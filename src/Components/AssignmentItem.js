import React from 'react';

import '../index.css';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Link} from "react-router-dom";

export default class AssignmentItem extends React.Component {
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {this.props.assignment.dueDate}
          </div>
          <div class="col-lg-6" align="right">
            <Link to="/Assignment">
              <p>{this.props.assignment.title}</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
