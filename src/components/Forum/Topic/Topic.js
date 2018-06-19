import React, { Component } from 'react';
import './Topic.css';
import axios from 'axios';

class Topic extends Component {
  constructor(){
    super();

    this.state = {
      title: null,
      content: null,
      category: null,
    }
  }

  titleUpdate = (v) => {
    this.setState({
      title: v
    })
  }

  contentUpdate = (v) => {
    this.setState({
      content: v
    })
  }

  handleChange = (value) => {
    console.log(`selected ${value}`);
    this.setState({
      category: value
    })
  }

  createTopic = () => {
    let newTopic = {
      subject: this.state.title,
      content: this.state.content,
      category: this.state.category,
      created: 'NOW()'
    };

    axios.post('/api/threads', newTopic).then( res => {
      console.log('Topic-----res', res)
    })
  }

  render() {
    return (
      <div className="topic">
        <div><input placeholder="Title" onChange={ e => this.titleUpdate(e.target.value) }></input></div>
        <div><input className="topic-body-text" placeholder="Enter body text" onChange={ e => this.contentUpdate(e.target.value) }></input></div>
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
              {/* <select defaultValue="lucy" style={{ width: 120 }} onChange={ e => this.handleChange(e.target.value) }>
                <option value="categories" disabled>categories</option>
                <option value="hello">hello</option>
                <option value="there">there</option>
              </select> */}
        </div>
        <div className="topic-button">
            <button onClick={this.createTopic}>Post</button>
            <button onClick={this.props.toggle}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default Topic;
