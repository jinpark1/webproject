import React, { Component } from 'react';
import './Register.css';
import starImg from '../../../images/star.png';
import { Link } from 'react-router-dom';

class Register4 extends Component {
    render() {
        const { updateOnlineID, updateFirstName, updateLastName } = this.props;
        return (
            <div className="register-container">
                <div className="register">
                    <div><img src={starImg} alt="star" /></div>
                    <div className="or">Create Account</div>
                        <div><Link className="link-button" to='/forum'>Go to Forum</Link></div>
                    <div className="or">Account has been created!</div>
                </div>
            </div>
        );
    }
}

export default Register4;
