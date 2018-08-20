import React, { Component } from 'react';
import axios from 'axios';

export const withData = url => BaseComponent => class extends Component {
  constructor() {
    super();
    this.state = {
      reply: [],
      data: []
    };
  }

  componentDidMount() {
    axios.get(`${url}${this.props.idpass}`).then( res => {
      this.setState({
          reply: res.data
      })
    })
  }


  componentWillReceiveProps(nextProps){
    if(nextProps.newReply.length > this.state.reply.length){
        this.setState({
            reply: nextProps.newReply
        })
    }
}

  render() {
    const { extraProp, ...passThroughProps } = this.props;
    if (this.state.reply.length) {
      return <BaseComponent reply={this.state.reply} {...passThroughProps} />
    } else {
      return <div>Be the first one to make a reply!</div>
    }
  }
}



