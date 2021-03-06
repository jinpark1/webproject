import React, { Component } from 'react';
import './Register.css';
import starImg from '../../../images/star.png';

class Register4 extends Component {
    render() {
        return (
            <div className="register-container">
                <div className="register">
                    <div>
                        <img src={starImg} alt="star" />
                    </div>
                    <div className="or">Create Account</div>
                        <div className="link-button-go-container">
                            <a href="/forum"><button className="link-button">Go to Forum</button></a>
                        </div>
                    <div className="or">Account has been created!</div>
                </div>
            </div>
        );
    }
}

export default Register4;
