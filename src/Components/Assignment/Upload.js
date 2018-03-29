import React from 'react';
import '../../index.css';


export default class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '',};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An assignment was submitted: ' + this.state.value);
    event.preventDefault();
    //Ajax post call
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Video Submission:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
