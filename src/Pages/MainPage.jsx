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
      <div className="mainpage container">
        <div className="row justify-content-md-center"><h1 id="dashboard-title">DashBoard</h1></div>
        <div className = "row justify-content-md-center">
          <ToDoAssignments/>
          <CompletedAssignments/>
        </div>
      </div>
    )
  }
}


export default MainPage;
