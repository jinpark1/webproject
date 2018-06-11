import React, { Component } from 'react';
import './Auth.css';
import starImg from '../../images/star.png';
import { Link } from 'react-router-dom';

class Auth extends Component {
    render() {
        return (
            <div className="auth-container">
               
                <div className="auth-signin">
                    <div><img src={starImg} /></div>
                    <div><input placeholder="Email" /></div>
                    <div><input placeholder="Password"/></div>
                    <div><button>Log in</button></div>
                    <div className="or">OR</div>
                    <div><button><Link className="auth-register-button" to='/register'>Create New Account</Link></button></div>
                </div>
                
            </div>
        );
    }
}

export default Auth;

