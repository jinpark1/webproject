import React, { Component } from 'react';
import './Auth.css';
import starImg from '../../images/star.png';
import { Link } from 'react-router-dom';
import backGroundGrey from '../../images/backgroundgrey3.jpg';
import axios from 'axios';


class Auth extends Component {
    constructor(){
        super()

        this.state = {
            message: null
        }
    }

    getMessage = error => error.response
    ? error.response.data
      ? error.response.data.message
      : JSON.stringify(error.response.data, null, 2)
    : error.message;

    login = () => {
        let loginUser = {
            email: this.refs.email.value,
            password: this.refs.password.value
        };
        axios.post('/api/login', loginUser).then(response => {
            console.log(response.data)
            console.log(this.props)
            this.props.history.push('/forum')
        }).catch((error) => {
            this.setState({ message: this.getMessage(error) })
        })
    }

    render() {
        return (
            <div className="message-container"> 
                <div className="message">{this.state.message}</div>
            <div className="auth-container">
                <div className="auth-signin">
                    <div><img src={starImg} alt="star" /></div>
                    <div><input placeholder="Email" ref="email" /></div>
                    <div><input placeholder="Password" ref="password" /></div>
                    <div><button onClick={ this.login }>Log in</button></div>
                    <div className="or">OR</div>
                    <div><button><Link className="auth-register-button" to='/register'>Create New Account</Link></button></div>
                </div>
            </div>
            </div>
        );
    }
}

export default Auth;

