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
