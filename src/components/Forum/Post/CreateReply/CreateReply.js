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

    console.log('createTopic-', this.props.userData.id)

    axios.post('/api/reply', newReply).then( res => {
      console.log('CreateReply-----res', res)

        axios.get(`/api/reply/${ this.props.id }`).then( response => {
          console.log('--post--reply5-----', response.data)
          this.props.getReply(response.data)
        })   
    })
  }

  render() {
    // this.props.match.params.id
    console.log('createReply---', this.props.id)
    console.log('createReply---redux', this.props)
    console.log('createReply---redux', this.props.userData.id)
    return (
      <div className="createReply">
        <div className="createReply-body-text-container">
            <input className="createReply-body-text" placeholder="Enter text" onChange={ e => this.contentUpdate(e.target.value) }></input>
        </div>
        <div className="createReply-button">
            <button onClick={ () => {this.createTopic(); this.props.toggle()} }>Post</button>
            <button onClick={this.props.toggle}>Cancel</button>
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
