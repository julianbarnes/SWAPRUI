import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';



// Require stylesheets as needed
// must run npm install --save bootstrap before importing
//must change class to className

class Page extends React.Component {
  render() {
    return(

      <div className="MainPage">
        <Title />
        <MenuBar/>
        <div>
          <YoutubeVideo />
          <Description />
          <Upload />
        </div>
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

function Upload(props) {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An assignment was submitted: ' + this.state.value);
    event.preventDefault();
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





ReactDOM.render(
  <Page />,
  document.getElementById('root')
);