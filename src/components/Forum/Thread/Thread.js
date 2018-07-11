import React, { Component } from 'react';
import './Thread.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Thread extends Component {
    constructor(){
        super();

        this.state = {
            threads: [],
            offset: 0,
            pageNum: 0,
        }
    }

    componentDidMount() {
        console.log('thread-----', this.props.category)
        const category = this.props.category
        // Gets 20 items at a time 
        const id = this.state.offset * 20

        if(category === 'All'){
            axios.get(`/api/threads/${id}`).then( res => {
                console.log(res.data)
                this.setState({
                    threads: res.data,
                    offset: this.state.offset + 1
                })
            })
        } else {
            console.log('category---', category)
            axios.get(`/api/threads/${id}/${category}`).then( res => {
                console.log(res.data)
                this.setState({
                    threads: res.data,
                    offset: this.state.offset + 1
                })
            })
        }

        // axios.get(`/api/threads/${id}`).then( res => {
        //     console.log(res.data)
        //     this.setState({
        //         threads: res.data,
        //         offset: this.state.offset + 1
        //     })
        // })
    //    axios.get(`/api/threads/${id}/${category}`).then( res => {
    //        console.log(res.data)
    //        this.setState({
    //            threads: res.data,
    //            offset: this.state.offset + 1
    //        })
    //    })
    }


    updateLatest = () => {
        const category = this.props.category;
        const id = (this.state.pageNum - 1) * 20
        
        if(category === 'All'){
            axios.get(`/api/threads/${id}`).then( res => {
                this.setState({
                    pageNum: this.state.pageNum - 1,
                    offset: this.state.offset - 1,
                    threads: res.data,
                })
            }) 
            window.scrollTo(0, 0)
        } else {
            axios.get(`/api/threads/${id}/${category}`).then( res => {
                this.setState({
                    pageNum: this.state.pageNum - 1,
                    offset: this.state.offset - 1,
                    threads: res.data,
                })
            }) 
            window.scrollTo(0, 0)
        }
    }

    updatePrevious = () => {
        const category = this.props.category;
        const id = this.state.offset * 20

        if(category === 'All'){
            axios.get(`/api/threads/${id}`).then( res => {
                this.setState({
                    pageNum: this.state.pageNum + 1,
                    offset: this.state.offset + 1,
                    threads: res.data,
                })
            })
            window.scrollTo(0, 0)
        } else {
            axios.get(`/api/threads/${id}/${category}`).then( res => {
                this.setState({
                    pageNum: this.state.pageNum + 1,
                    offset: this.state.offset + 1,
                    threads: res.data,
                })
            })
            window.scrollTo(0, 0)
        }
    }

    // updateCategory = () => {
    //     const id = 0
    //     axios.get(`/api/threads/${id}`).then(res => {
            
    //         let arrayStuff = []
            
    //         res.data.map( (v) => {
    //             if(v.category === 'support'){
    //                 arrayStuff.push(v)
    //             }
    //         })
    //         this.setState({
    //             threads: arrayStuff
    //         })
    //     })
    // }

    test = (a, b) => {
        return a + b;
    }

    render() {
        console.log('thread------', this.props.category)
        const threads = this.state.threads ? this.state.threads.map( (v, i) => {
            return (
                <Link to={`/forums/${v.thread_id}`} className="thread-list" key={i}>
                    <div className="thread-list-leftID">
                        <div className="thread-list-threadID">
                            <div className="thread-list-threadID-child">{v.thread_id}</div>
                        </div>
                        <img className="thread-list-photo" src={v.profile_photo} />
                    </div> 
                    <div className="thread-list-left">
                        <div className="thread-list-subject">{v.subject}</div>
                        <div className="thread-list-id">{v.online_id}</div>
                    </div>
                    <div className="thread-list-right">
                        <div className="thread-list-created">{v.thread_created}</div>
                        <div className="thread-list-category">{v.category}</div>
                    </div>
                </Link>
            )
        }) : null; 

        return (
            <div className="thread">    
                <div className="thread-show">
                    {threads}
                </div>
                <div className="thread-pagination">
                    { this.state.pageNum > 0 ? <button onClick={this.updateLatest} >Left Arrow</button> : <button disabled>Left Arrow</button> }
                    { this.state.threads.length === 20 ? <button className="thread-button-right" onClick={this.updatePrevious} >Right Arrow</button> : <button disabled>Right Arrow</button> }
                </div>
            </div>
        );
    }
}

export default Thread;


