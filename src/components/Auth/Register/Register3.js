import React, { Component } from 'react';
import './Register.css';
import starImg from '../../../images/star.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

class Register3 extends Component {

    registerUser = () => {
        let newUser = {
            email: this.props.email,
            onlineID: this.props.onlineID,
            password: this.props.password,
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            created: 'NOW()',
            admin: false
        };
        console.log(this.props);
        axios.post('/register', newUser)
    }

    render() {
        return (
            <div className="register-container">
                <div className="register">
                    <div><img src={starImg} alt="star" /></div>
                    <div className="or">Create Account</div>
                        <div><Link onClick={ this.registerUser } className="link-button" to='/register4'>Create Account</Link></div>
                        <div><Link className="link-button" to='/register2'>Back</Link></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.email,
        onlineID: state.onlineID,
        password: state.password,
        firstName: state.firstName,
        lastName: state.lastName
    }
}

export default connect(mapStateToProps)(Register3);

