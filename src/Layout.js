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
        <MenuBar/>
      </div>
    )
  }
}

function MenuBar(props) {
  return(
    <nav className="navbar navbar-default MenuBar">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" id="title">SWAPR</a>
        </div>
        <p className="menu_icon">Tom P. Burdell</p>
      </div>
    </nav>);
}
function Title(props) {
  return (<title>SWAPR</title>);
}
