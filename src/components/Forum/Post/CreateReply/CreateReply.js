import React, { Component } from 'react';
import './CreateReply.css';
import axios from 'axios';

class CreateReply extends Component {
  constructor(){
    super();

    this.state = {
      content: null,
    }
  }

  contentUpdate = (v) => {
    this.setState({
      content: v
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
      <div className="createReply">
        <div><input className="createReply-body-text" placeholder="Enter body text" onChange={ e => this.contentUpdate(e.target.value) }></input></div>
        <div className="createReply-button">
            <button onClick={this.createTopic}>Post</button>
            <button onClick={this.props.toggle}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default CreateReply;
