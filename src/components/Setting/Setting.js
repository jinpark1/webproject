import React, { Component } from 'react';
import './Setting.css';
import { connect } from 'react-redux';

class Setting extends Component {
    constructor(){
        super()

        this.state = {
            onlineID: null,
            firstName: null,
            lastName: null,
            email: null

        }
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

    render() {
        console.log(this.props.userData)

        return (
            <div className="setting">
                <div className="setting-top">
                    <div className="display-settings">SETTINGS</div>
                    <div className="display-id">{this.props.userData.online_id}</div>
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
                        <button>Save</button>
                        <div>Hi</div>
                    </div>
                    <div className="setting-bottom-right">hi2</div>
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

export default connect(mapStateToProps)(Setting);


