import React, { Component } from 'react';
import './Register.css';
import starImg from '../../../images/star.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateEmail, updatePassword, updatePasswordRe } from '../../../ducks/reducer';

class Register extends Component {
    render() {
        return (
            <div className="register-container">
                <div className="register">
                    <div>
                        <img src={starImg} alt="star" />
                    </div>
                    <div className="or">Create Account</div>
                    <div>
                        <input placeholder="Email" onChange={ e => this.props.updateEmail(e.target.value) } />
                    </div>
                    <div>
                        <input placeholder="Password" onChange={ e => this.props.updatePassword(e.target.value) } type="password" />
                    </div>
                    <div>
                        <input placeholder="Re-enter Password" onChange={ e => this.props.updatePasswordRe(e.target.value) } type="password"/>
                    </div>
                    <div>
                        <div>
                            <Link className="link-button" to='/auth'>Back</Link>
                        </div>
                        <div>
                            <Link className="link-button" to='/register2'>Next</Link>
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
        password: state.password,
        passwordRe: state.passwordRe
    }
}

const mapDispatchToProps = {
    updateEmail,
    updatePassword,
    updatePasswordRe
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

