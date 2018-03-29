import React from 'react';
import './index.css';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      todolist: [],
      completedlist: [],
    }
  }
  getToDo() {
    //Ajax api call
  }
  getCompleted() {
    //get
  }
  componentWillMount() {
    //this will call the getter methods
  }
  render() {
    return(

      <div className="MainPage">
        <Title />
      </div>
    )
  }
}

function Title(props) {
  return (<title>SWAPR</title>);
}
