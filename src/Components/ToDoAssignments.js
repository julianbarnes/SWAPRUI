import React from 'react';
//import ReactDOM from 'react-dom';
import '../index.css';
import AssignmentItem from './AssignmentItem';

export default class ToDoAssignments extends React.Component {
//constructor define the todolist
//component will mount should populate the list from the api
//use map to iterate through the array
constructor(props) {
  super(props);
  this.state = {
    assignmentList:[]
  };
}

componentWillMount(){
  //Later this will take in from main page state through props
  this.setState({assignmentList: [
    {
      title: "Velocity1",
      dueDate: "March 3",
      dueTime: "12:00pm"
    },
    {
      title: "Velocity1",
      dueDate: "March 3",
      dueTime: "12:00pm"
    },
    {
      title: "Velocity1",
      dueDate: "March 3",
      dueTime: "12:00pm"
    },
    {
      title: "Velocity1",
      dueDate: "March 3",
      dueTime: "12:00pm"
    }
  ]}
);
}
render(){
    return (
      <div id="todo-block" className = "col-lg-5">
        <div>
          <h3 className="justify-content-md-center">Assignments</h3>
        </div>
        <div>
            {this.state.assignmentList.map((assignment) => {
              return(<AssignmentItem assignment={assignment}/>);
            })}
        </div>
      </div>
    );
  }

}
