import React, { Component } from 'react';
import './Topic.css';

class Topic extends Component {

  render() {
    return (
      <div className="topic">
        <div><input placeHolder="Title"></input></div>
        <div><input className="topic-body-text" placeHolder="Enter body text"></input></div>
        <div className="topic-button">
            <button>Post</button>
            <button>Cancel</button>
        </div>
      </div>
    );
  }
}

export default Topic;
