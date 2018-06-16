import React, { Component } from 'react';

class Topic extends Component {

  render() {
    return (
      <div className="Topic">
        <input placeHolder="Title"></input>
        <input placeHolder="Enter body text"></input>
        <button>Post</button>
        <button>Cancel</button>
      </div>
    );
  }
}

export default Topic;
