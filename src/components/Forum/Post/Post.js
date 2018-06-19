import React, { Component } from 'react';
import './Post.css';
import axios from 'axios';

class Post extends Component {
    constructor(){
        super();

        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id
      
        axios.get(`/api/post/${ this.props.match.params.id}`).then( res => {
            console.log('---post---Res', res)
            // console.log('---post---res2', res.data[0].category)
            this.setState({
                posts: res.data
            })          
        })
    }

    render() {
        const hi = this.state.posts[0] ? this.state.posts[0] : 'loading..'
        console.log('post----5', hi)
        console.log('post----6', hi.category)

        return (
            <div className="post">
                {hi.category}
            </div>
        );
    }
}

export default Post;


