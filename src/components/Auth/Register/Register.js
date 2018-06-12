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
                    <div><input placeholder="Email" /></div>
                    <div><input placeholder="Password"/></div>
                    <div><input placeholder="Re-enter Password"/></div>
                    <div>
                        <div><Link className="link-button" to='/auth'>Back</Link></div>
                        <div><Link className="link-button" to='/register2'>Next</Link></div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Register;

