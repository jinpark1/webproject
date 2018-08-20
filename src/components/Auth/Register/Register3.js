import React, { Component } from 'react';
import './Register.css';
import starImg from '../../../images/star.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { updateUserData } from '../../../ducks/reducer';

class Register3 extends Component {
    constructor(){
        super();
        
        this.state = {
            message: null,
        }
    }

    getMessage = error => error.response
    ? error.response.data
      ? error.response.data.message
      : JSON.stringify(error.response.data, null, 2)
    : error.message;

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
        axios.post('/api/register', newUser).then(response => {
            this.props.updateUserData(response.data.user)
            this.props.history.push('/register4')
        }).catch((error) => {
            this.setState({ message: this.getMessage(error) })
        })
    }

    render() {
        return (
            <div className="message-container">
                <div className="message">{this.state.message}</div>
            <div className="register-container">
                <div className="register">
                    <div>
                        <img src={starImg} alt="star" />
                    </div>
                    <div className="or">Create Account</div>
                    <div>
                        <button onClick={ this.registerUser } className="link-button">Create Account</button>
                    </div>
                    <div>
                        <Link className="link-button" to='/register2'>Back</Link>
                    </div>
                </div>
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

const mapDispatchToProps = {
    updateUserData    
}

export default connect(mapStateToProps, mapDispatchToProps)(Register3);

