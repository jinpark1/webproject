import React, { Component } from 'react';
import './Topic.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 



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

  contentUpdate = (value) => {
    this.setState({
      content: value
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
      created: this.time(),
      usersID: this.props.userData.id
    };
    
    axios.post('/api/threads', newTopic).then( res => {
      console.log('Topic-----res', res)
      console.log('Topic---props', this.props)
      console.log('this-props-number-topic', res.data[0].id)
      //requires withRouter to be wrapped on export default.
      this.props.history.push(`/forums/${res.data[0].id}`)
    })
  }

  time = () => {
    var date = new Date();
    var time;
  
    var month = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month; // Two digit months: 01, 02, etc...
    var day = date.getDate();
    var year = date.getFullYear();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var ampm = hour >= 12 ? 'pm' : 'am';
    hour = hour % 12;
    hour = hour ? hour : 12; // '0' needs to be 12 ( 0 is falsy, everything else is truthy )
    minute = minute < 10 ? `0${minute}` : minute;
  
    date = `${month}/${day}/${year}`;
    time = `${hour}:${minute} ${ampm}`;
  
    console.log( `${date} - ${time}` );
    return `${date} - ${time}`;
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

export default withRouter(connect(mapStateToProps)(Topic));
