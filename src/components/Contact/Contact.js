import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { updateUserData } from '../../ducks/reducer';
import './Contact.css';
import ReactQuill from 'react-quill';

class Contact extends Component {
    constructor(){
        super()

        this.state = {
            onlineID: null,
            firstName: null,
            lastName: null,
            email: null,
            message: null,
            updatedOnlineID: null,
        }
    }

    contentUpdate = (e) => {
        this.setState({
            message: e
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.message)
        const { message } = this.state;
        const { online_id, first_name, last_Name, email } = this.props.userData;
        axios.post('/api/sendmail', {
            online_id,
            first_name,
            last_Name,
            email,
            message,
        }).then( res => {
            console.log( 'mail', JSON.stringify( res.data ) )
        })
    }

    render() {
        let displayID = this.state.updatedOnlineID ? this.state.updatedOnlineID : this.props.userData.online_id
        return (
            <div className="contact">
                <div className="contact-top">
                    <div className="display-settings">Contact Admin</div>
                    <div className="display-id">{displayID}</div>
                    <img className="display-profile-img" src="https://robohash.org/23d23d/?set=set4" />
                </div>
                <div className="contact-bottom">
                    <div className="contact-bottom-left">
                        <div>Online ID</div>
                        <input placeholder={this.props.userData.online_id} onChange={this.handleChange} name="onlineID" disabled></input>
                        <div>First Name</div>
                        <input placeholder={this.props.userData.first_name} onChange={this.handleChange} name="firstName" disabled></input>
                        <div>Last Name</div>
                        <input placeholder={this.props.userData.last_name} onChange={this.handleChange} name="lastName" disabled></input>
                        <div>Email</div>
                        <input placeholder={this.props.userData.email} onChange={this.handleChange} name="email" disabled></input>
                  
                    </div>
                    <div className="contact-bottom-right">
                        <div className="contact-body-quill-container">
                            <ReactQuill className="contact-body-quill" theme="snow" value={this.state.message} onChange={this.contentUpdate}/>                                  
                        </div>
                        <button className="contact-button-send" onClick={this.handleSubmit}>Send</button>  
                        <div className="contact-body-button-container"></div>
                    </div>
                </div>
                <div className="contact-bottom-delete-container">
                    <div className="contact-bottom-delete"></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userData: state.userData
    }
} 

const mapDispatchToProps = {
    updateUserData
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Contact));


