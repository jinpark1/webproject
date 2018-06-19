import React, { Component } from 'react';
import './Topic.css';

class Topic extends Component {

  handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  render() {
    return (
      <div className="topic">
        <div><input placeholder="Title"></input></div>
        <div><input className="topic-body-text" placeholder="Enter body text"></input></div>
        <div><select className="topic-category" defaultValue="forumCategory" style={{ width: 120 }} onChange={ e => this.handleChange(e.target.value) } >
                  <option value="forumCategory" disabled>Forum Category</option>
                  <option value="general">General</option>
                  <option value="hardware">Hardware</option>
                  <option value="mobile">Mobile</option>
                  <option value="operatingSystems">Operating Systems</option>
                  <option value="programming">Programming</option>
                  <option value="random">Random</option>
                  <option value="security">Security</option>
                  <option value="social">Social</option>
                  <option value="software">Software</option>
                  <option value="feedback">Feedback</option>
                  <option value="support">Support</option>
              </select>
              <select defaultValue="lucy" style={{ width: 120 }} onChange={ e => this.handleChange(e.target.value) }>
                <option value="categories" disabled>categories</option>
                <option value="hello">hello</option>
                <option value="there">there</option>
              </select>
        </div>
        <div className="topic-button">
            <button>Post</button>
            <button>Cancel</button>
        </div>
      </div>
    );
  }
}

export default Topic;
