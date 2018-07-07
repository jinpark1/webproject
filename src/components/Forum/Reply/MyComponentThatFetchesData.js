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

  // componentDidMount() {
  //   axios.get(url).then( res => {
  //     console.log('--post--reply5-----', res)
  //     this.setState({
  //         reply: res.data
  //     })
  //   })
  // }

  componentDidMount() {
    axios.get(`${url}${this.props.idpass}`).then( res => {
      console.log('--post--reply5-----', res)
      this.setState({
          reply: res.data
      })
    })
  }


  componentWillReceiveProps(nextProps){
    console.log('---------nextProps', nextProps)
    if(nextProps.newReply.length > this.state.reply.length){
        this.setState({
            reply: nextProps.newReply
        })
    }
}

  render() {
    const { extraProp, ...passThroughProps } = this.props;
    console.log('-------MycomponentThatFetchesData---', this.props)
    if (this.state.reply.length) {
      // return <BaseComponent reply={this.state.data} />
      return <BaseComponent reply={this.state.reply} {...passThroughProps} />
    } else {
      return <div>Be the first one to make a reply!</div>
    }
  }
}



// class MyComponentThatFetchesData extends Component {
//   render() {
//     const comments = this.props.data;
//     return (
//       <div>
//         <div>hello</div>
//         {comments.map(x => (
//           <div className="comment">
//             <div>Name: {x.name}</div>
//             <div>Text: {x.text}</div>
//             <div>Hello</div>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default withData('some fake url')(MyComponentThatFetchesData)