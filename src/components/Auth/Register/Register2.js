import React, { Component } from 'react';
import './Register.css';
import starImg from '../../../images/star.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateOnlineID, updateFirstName, updateLastName } from '../../../ducks/reducer';

class Register2 extends Component {
    render() {
        const { updateOnlineID, updateFirstName, updateLastName } = this.props;
        return (
            <div className="register-container">
                <div className="register">
                    <div><img src={starImg} alt="star" /></div>
                    <div className="or">Create Account</div>
                    <div><input placeholder="Online ID" onChange={ e => updateOnlineID(e.target.value) } /></div>
                    <div><input placeholder="First Name" onChange={ e => updateFirstName(e.target.value) }/></div>
                    <div><input placeholder="Last Name" onChange={ e => updateLastName(e.target.value) }/></div>
                    <div>
                        <div><Link className="link-button" to='/register'>Back</Link></div>
                        <div><Link className="link-button" to='/register3'>Next</Link></div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        onlineID: state.onlineID,
        firstName: state.firstName,
        lastName: state.lastName
    }
}

const mapDispatchToProps = {
    updateOnlineID,
    updateFirstName,
    updateLastName

}

export default connect(mapStateToProps, mapDispatchToProps)(Register2);

