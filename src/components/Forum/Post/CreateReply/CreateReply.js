import React, { Component } from 'react';
import './CreateReply.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

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
            <input className="createReply-body-text" placeholder="Enter text" onChange={ e => this.contentUpdate(e.target.value) }></input>
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
