import React, { Component } from 'react';
import './Register.css';
import starImg from '../../../images/star.png';
import { Link } from 'react-router-dom';

class Register extends Component {
    render() {
        return (
            <div className="register-container">
                <div className="register">
                    <div><img src={starImg} alt="star" /></div>
                    <div className="or">Create Account</div>
                    <div><input placeholder="Online ID" /></div>
                    <div><input placeholder="First Name"/></div>
                    <div><input placeholder="Last Name"/></div>
                    <div>
                        <div><Link className="link-button" to='/register'>Back</Link></div>
                        <div><Link className="link-button" to='/register3'>Create Account</Link></div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Register;

