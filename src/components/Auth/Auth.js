import React, { Component } from 'react';
import './Auth.css';
import starImg from '../../images/star.png';

class Auth extends Component {
    render() {
        return (
            <div className="auth-container">
               
                <div className="auth-signin-container">
                    <div><img src={starImg} /></div>
                    <div></div>
                    <div><input placeholder="Email" /></div>
                    <div><input placeholder="Password"/></div>
                    <div></div>
                    <div><button>Log in</button></div>
                    <div></div>
                    <div></div>
                    <div className="or">OR</div>
                    <div></div>
                    <div><button>Create New Account</button></div>
                </div>
                
            </div>
        );
    }
}

export default Auth;

