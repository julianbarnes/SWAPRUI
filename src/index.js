import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';



// Require stylesheets as needed
// must run npm install --save bootstrap before importing
//must change class to className

class FrontPage extends React.Component {
  constructor() {
    super();
    this.state = {
      todolist = [],
      completedlist = [],
    }
  }
  componentWillMount() {

  }

  render() {
    return(

      <div className="MainPage">
        <Title />
        <MenuBar/>
        <ToDoAssignments/>
        <CompletedAssignments/>
      </div>
    )
  }
}

function Title(props) {
  return (<title>SWAPR</title>);
}

function MenuBar(props) {
  return(
    <nav className="navbar navbar-default MenuBar">
      <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">SWAPR</a>
      </div>
    <p className="menu_icon">Tom P. Burdell</p>
  </div>
</nav>);
}

class ToDoAssignments extends React.Component {
//constructor define the todolist
//component will mount should populate the list from the api
//use map to iterate through the array
  return (
    <div id="todo-block">
  <h2>To-Do</h2>
    <h3>Your Assignments</h3>
    <div>
        <ul>
            <li className="card">
                <p>Assignment</p>
                <p><div className="pull-right"> due  at 5:30</div></p>
            </li>
            <li className="card">
                <p>Assignment</p>
                <p><div className="pull-right"> due  at 5:30</div></p>
            </li>
            <li className="card">
                <p>Assignment</p>
                <p><div className="pull-right"> due  at 5:30</div></p>
            </li>
            <li className="card">
                <p>Assignment</p>
                <p><div className="pull-right"> due  at 5:30</div></p>
            </li>
            <li className="card">
                <p>Assignment</p>
                <p><div className="pull-right"> due  at 5:30</div></p>
            </li>
        </ul>
    </div>
    </div>
    )

}

function CompletedAssignments(props) {
  return (

    <div id="completed-block">
    <div>
      <h2 class="title">Completed</h2>
      <h3>Your Assignments</h3>
    </div>
    <div>
        <ul>
            <li className="card">
                <p> assignment title</p>
                <p><div class="pull-right">assignment dueDate at assignment dueTime</div></p>
            </li>
            <li className="card">
                <p> assignment title</p>
                <p><div class="pull-right">assignment dueDate at assignment dueTime</div></p>
            </li>
            <li className="card">
                <p> assignment title</p>
                <p><div class="pull-right">assignment dueDate at assignment dueTime</div></p>
            </li>
            <li className="card">
                <p> assignment title</p>
                <p><div class="pull-right">assignment dueDate at assignment dueTime</div></p>
            </li>
            <li className="card">
                <p> assignment title</p>
                <p><div class="pull-right">assignment dueDate at assignment dueTime</div></p>
            </li>

        </ul>
    </div>
    </div>
  );
}

function Assignment(props) {}



ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
