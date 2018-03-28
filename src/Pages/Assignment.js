import React from 'react';
import '../index.css';
import YouTube from 'react-youtube'

// Require stylesheets as needed
// must run npm install --save bootstrap before importing
//must change class to className

export default class Assignment extends React.Component {
  render() {
    return(

      <div className="MainPage">
        <div>
          <YoutubeVideo />
          <Description />
          <Upload />
        </div>
      </div>
    )
  }
}


class YoutubeVideo extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <YouTube
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

}


function Description(props) {
  return(<p>This is what the assignment is about</p>);
}

class Upload extends React.Component {
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
