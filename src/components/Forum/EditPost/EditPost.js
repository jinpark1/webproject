import React, { Component } from 'react';
import './EditPost.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 

class EditPost extends Component {
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

  contentUpdate = (value) => {
    this.setState({
      content: value
    })
  }

  handleChange = (value) => {
    this.setState({
      category: value
    })
  }

  createTopic = () => {
    let editTopic = {
      subject: this.state.title,
      content: this.state.content,
      category: this.state.category,
    };

    axios.put(`/api/threads/${this.props.id}`, editTopic).then( res => {
      this.props.toggle()
      this.props.updateEditPost(res.data)
    }).catch( res => {
      console.log(res.data)
    })
    
  }

  
  render() {
    return (
      <div className="topic">
        <div>
            <input className="topic-input-title" placeholder=" Title" onChange={ e => this.titleUpdate(e.target.value) } />
        </div>
            <ReactQuill className="topic-body-text-quill" theme="snow" value={this.state.content} onChange={this.contentUpdate}  />
        <div>
            <select className="topic-category" defaultValue="forumCategory" onChange={ e => this.handleChange(e.target.value) } >
                  <option value="forumCategory" disabled>Forum Category</option>
                  <option value="General">General</option>
                  <option value="Hardware">Hardware</option>
                  <option value="Mobile">Mobile</option>
                  <option value="OS">OS</option>
                  <option value="Code">Code</option>
                  <option value="Random">Random</option>
                  <option value="Security">Security</option>
                  <option value="Social">Social</option>
                  <option value="Software">Software</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Support">Support</option>
            </select>
        </div>
        <div className="topic-button">
            <button className="topic-button-post" onClick={this.createTopic}>Post</button>
            <button className="topic-button-cancel" onClick={this.props.toggle}>Cancel</button>
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

export default withRouter(connect(mapStateToProps)(EditPost));
