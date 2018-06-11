import React, { Component } from 'react';
import './Register.css';
import starImg from '../../../images/star.png';
import { Link } from 'react-router-dom';

class Register extends Component {
    render() {
        return (
            <div className="register-container">
               
                <div className="register">
                    <div><img src={starImg} /></div>
                    <div className="or">Create Account</div>
                    <div><input placeholder="Email" /></div>
                    <div><input placeholder="Password"/></div>
                    <div><input placeholder="Re-enter Password"/></div>
                    <div>hellohello
                        <div><button><Link className="link-button" to='/auth'>Back</Link></button></div>
                        <div><button><Link className="link-button" to='/register'>Next</Link></button></div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Register;

