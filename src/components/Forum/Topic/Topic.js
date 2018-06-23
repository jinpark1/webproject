import React, { Component } from 'react';
import './Topic.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

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
      created: 'NOW()',
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

  render() {
    return (
      <div className="topic">
        <div><input placeholder="Title" onChange={ e => this.titleUpdate(e.target.value) }></input></div>
        <div><input className="topic-body-text" placeholder="Enter body text" onChange={ e => this.contentUpdate(e.target.value) }></input></div>
        <div><select className="topic-category" defaultValue="forumCategory" style={{ width: 120 }} onChange={ e => this.handleChange(e.target.value) } >
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

const mapStateToProps = state => {
  return {
    userData: state.userData
  }
}

export default withRouter(connect(mapStateToProps)(Topic));
