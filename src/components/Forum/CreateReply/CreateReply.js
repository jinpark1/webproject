import React, { Component } from 'react';
import './CreateReply.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill';

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
    let newReply = {
      content: this.state.content,
      created: 'NOW()',
      threadID: this.props.id,
      userID: this.props.userData.id
    };

    axios.post('/api/reply', newReply).then( res => {
        axios.get(`/api/reply/${ this.props.id }`).then( response => {
          this.props.getReply(response.data)
        })   
    })
  }

  render() {
    return (
      <div className="createReply">
        <div className="createReply-body-text-container">
            <ReactQuill className="createReply-body-text-quill" theme="snow" value={this.state.content} onChange={this.contentUpdate}  />
        </div>
        <div className="createReply-button">
            <button className="createReply-button-post" onClick={ () => {this.createTopic(); this.props.toggle()} }>Post</button>
            <button className="createReply-button-cancel" onClick={this.props.toggle}>Cancel</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.userData
  }

}

export default withRouter(connect(mapStateToProps)(CreateReply));
