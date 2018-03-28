import React from 'react';
import ToDoAssignments from '../Components/ToDoAssignments';
import CompletedAssignments from '../Components/CompletedAssignments';
import '../index.css';

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      todolist:[],
      completedlist:[],
    }
  }

  getTodo() {
    //Ajax api call
    return;
  }

  getCompleted() {
    //get
    return;
  }


  componentWillMount() {
    //this will call the getter methods
    //getTodo();
    //getCompleted();
  }

  render() {
    return(
        <div className="main-page container">
          <div className="row">
            <div className="col-lg-3">
                <SideMenu/>
            </div>
            <div className="col-lg-9">
              <div className="row justify-content-md-center"><h1 id="dashboard-title">Dashboard</h1></div>
              <div className = "row justify-content-md-center">
                <ToDoAssignments/>
                <CompletedAssignments/>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
function SideMenu(props) {
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


export default MainPage;
