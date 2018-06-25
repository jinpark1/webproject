import React, { Component } from 'react';
import './Setting.css';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { updateUserData } from '../../ducks/reducer';

class Setting extends Component {
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
    
    getMessage = error => error.response
    ? error.response.data
      ? error.response.data.message
      : JSON.stringify(error.response.data, null, 2)
    : error.message;

    editUser = () => {
        let editUser = {
            onlineID: this.state.onlineID || this.props.userData.online_id,
            firstName: this.state.firstName || this.props.userData.first_name,
            lastName: this.state.lastName || this.props.userData.last_name,
            email: this.state.email || this.props.userData.email,
        }
        console.log('edituser---', editUser)

        axios.put(`/api/user/${this.props.userData.id}`, editUser).then( res => {
            console.log('axios put', res)
            console.log('axios put', res.data.user.online_id)
            this.setState({
                updatedOnlineID: res.data.user.online_id
            })            
        }).catch((error) => {
            this.setState({ message: this.getMessage(error) })
        })
    }

    handleChange = (e) => {
        if(e.target.name === "onlineID"){
            this.setState({
                onlineID: e.target.value
            })
        }
        if(e.target.name === "firstName"){
            this.setState({
                firstName: e.target.value
            })
        }
        if(e.target.name === "lastName"){
            this.setState({
                lastName: e.target.value
            })
        }
        if(e.target.name === "email"){
            this.setState({
                email: e.target.value
            })
        }
    }

    deleteUser = () => {
        axios.delete(`/api/deleteuser/${this.props.userData.id}`).then( res => {
            console.log('deletedUser')
            this.props.updateUserData({})
            this.props.history.push('/')
        }).catch((error) => {
            this.setState({ message: this.getMessage(error) })
        })
        window.scrollTo(0, 0)
    }

    render() {
        console.log('redux props', this.props.userData)
        let displayID = this.state.updatedOnlineID ? this.state.updatedOnlineID : this.props.userData.online_id
        console.log('state', this.state.updatedOnlineID)
        return (
            <div className="setting">
                <div className="setting-top">
                    <div className="display-settings">SETTINGS</div>
                    <div className="display-id">{displayID}</div>
                </div>
                <div className="setting-bottom">
                    <div className="setting-bottom-left">
                        <div>Online ID</div>
                        <input placeholder={this.props.userData.online_id} onChange={this.handleChange} name="onlineID"></input>
                        <div>First Name</div>
                        <input placeholder={this.props.userData.first_name} onChange={this.handleChange} name="firstName"></input>
                        <div>Last Name</div>
                        <input placeholder={this.props.userData.last_name} onChange={this.handleChange} name="lastName"></input>
                        <div>Email</div>
                        <input placeholder={this.props.userData.email} onChange={this.handleChange} name="email"></input>
                        <button onClick={this.editUser}>Save</button>
                    </div>
                    <div className="setting-bottom-right">hi2</div>
                </div>
                <div className="setting-bottom-delete-container">
                    <div className="setting-bottom-delete">
                        <div>Delete user and all threads and replys made by the user.</div>
                        <button onClick={this.deleteUser}>Click</button>
                    </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Setting));


