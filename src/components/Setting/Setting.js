import React, { Component } from 'react';
import './Setting.css';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { updateUserData } from '../../ducks/reducer';

const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/jinpark1/image/upload';

class Setting extends Component {
    constructor(){
        super()

        this.state = {
            onlineID: null,
            firstName: null,
            lastName: null,
            email: null,
            message: null,
            updatedOnlineID: null,
            updatedImg: '',
            image: '',
        }
    }
    
    getMessage = error => error.response
    ? error.response.data
      ? error.response.data.message
      : JSON.stringify(error.response.data, null, 2)
    : error.message;

    editUser = () => {
        let editUser = {
            onlineID: this.state.onlineID || this.props.userData.online_id,
            firstName: this.state.firstName || this.props.userData.first_name,
            lastName: this.state.lastName || this.props.userData.last_name,
            email: this.state.email || this.props.userData.email,
            profilePhoto: this.state.image || this.props.userData.profile_photo
        }
        console.log('edituser---', editUser)

        axios.put(`/api/user/${this.props.userData.id}`, editUser).then( res => {
            console.log('axios put', res)
            console.log('axios put', res.data.user.online_id)
            console.log('axios put photo', res.data.user.profile_photo)
            this.setState({
                updatedOnlineID: res.data.user.online_id,
                updatedImg: res.data.user.profile_photo
            })            
        }).catch((error) => {
            this.setState({ message: this.getMessage(error) })
        })
    }

    handleChange = (e) => {
        if(e.target.name === "onlineID"){
            this.setState({
                onlineID: e.target.value
            })
        }
        if(e.target.name === "firstName"){
            this.setState({
                firstName: e.target.value
            })
        }
        if(e.target.name === "lastName"){
            this.setState({
                lastName: e.target.value
            })
        }
        if(e.target.name === "email"){
            this.setState({
                email: e.target.value
            })
        }
    }

    deleteUser = () => {
        axios.delete(`/api/deleteuser/${this.props.userData.id}`).then( res => {
            console.log('deletedUser')
            this.props.updateUserData({})
            this.props.history.push('/')
        }).catch((error) => {
            this.setState({ message: this.getMessage(error) })
        })
        window.scrollTo(0, 0)
    }

    handleImageUpload(files){
        //axios call to server to request hashed signature
        console.log('file', files)
        // console.log('files', files[0])
        axios.get('/api/cloud').then(response => {
            console.log('axiosget-----', response)
            console.log('axiosget-----signature', response.data.signature)
        
        //form data for signed uploads

        let formData = new FormData();
        formData.append("signature", response.data.signature)
        formData.append("api_key", "588865653542695");
        formData.append("timestamp", response.data.timestamp)
        formData.append("file", files[0]);

        // axios call to cloudinary using the URL set at top 
            axios.post(CLOUDINARY_UPLOAD_URL, formData).then(response => {
                console.log('axiospost-------', response.data);
                // Setting state with the secure_url
                this.setState({
                    image: response.data.secure_url
                })
            }).catch( err => {
                console.log(err);
            }) 
        })
    }    

    handleFormChange = ( e ) => {
        this.setState({ [e.target.name]: e.target.value });
      }

    
    
      render() {
        console.log('secure url', this.state.image)
        console.log('settings-------------------',this.props.userData.profile_photo)
        console.log('redux props', this.props.userData)
        let displayID = this.state.updatedOnlineID ? this.state.updatedOnlineID : this.props.userData.online_id;
        let displayImg = this.state.updatedImg ? this.state.updatedImg : this.props.userData.profile_photo;
        console.log('state', this.state.updatedOnlineID)
        return (
            <div className="setting">
                <div className="setting-top">
                    <div className="display-settings">SETTINGS</div>
                    <div className="display-id">{displayID}</div>
                    <img className="display-profile-img" src={displayImg} />
                </div>
                <div className="setting-bottom">
                    <div className="setting-bottom-left">
                        <div>Online ID</div>
                        <input placeholder={this.props.userData.online_id} onChange={this.handleChange} name="onlineID"></input>
                        <div>First Name</div>
                        <input placeholder={this.props.userData.first_name} onChange={this.handleChange} name="firstName"></input>
                        <div>Last Name</div>
                        <input placeholder={this.props.userData.last_name} onChange={this.handleChange} name="lastName"></input>
                        <div>Email</div>
                        <input placeholder={this.props.userData.email} onChange={this.handleChange} name="email"></input>
                        <button onClick={this.editUser}>Save</button>
                    </div>
                    <div className="setting-bottom-right">
                        <div className="setting-bottom-right-title">Select Icon</div>
                        <div className="setting-bottom-right-display">
                            <img src="https://robohash.org/23d23d/?set=set4" />
                            <img src="https://robohash.org/f23f2/?set=set4" />
                            <img src="https://robohash.org/23f2f2asf/?set=set4" />
                            <img src="https://robohash.org/bfds/?set=set4" />
                            <img src="https://robohash.org/asdfawe/?set=set4" />
                            <img src="https://robohash.org/wefwe/?set=set4" />
                            <img src="https://robohash.org/2f32/?set=set4" />
                            <img src="https://robohash.org/wef/?set=set4" />
                            <img src="https://robohash.org/23f/?set=set4" />
                            <img src="https://robohash.org/bsdb/?set=set4" />
                            <img src="https://robohash.org/erhr/?set=set4" />
                            <img src="https://robohash.org/hrtheh/?set=set4" />
                            <img src="https://robohash.org/dfsg/?set=set4" />
                            <img src="https://robohash.org/bdf/?set=set4" />
                            <img src="https://robohash.org/rhh/?set=set4" />
                            <img src="https://robohash.org/h6rth/?set=set4" />
                            <img src="https://robohash.org/loi/?set=set4" />
                            <img src="https://robohash.org/yuj/?set=set4" />
                            <img src="https://robohash.org/yj/?set=set4" />
                            <img src="https://robohash.org/saf/?set=set4" />
                            <img src="https://robohash.org/kjgh/?set=set3" />
                            <img src="https://robohash.org/32dsas/?set=set3" />
                            <img src="https://robohash.org/h76/?set=set3" />
                            <img src="https://robohash.org/kgy/?set=set3" />
                            <img src="https://robohash.org/kiu/?set=set3" />
                            <img src="https://robohash.org/32dsas/?set=set3" />
                            <img src="https://robohash.org/asdf/?set=set3" />
                            <img src="https://robohash.org/sadf/?set=set3" />
                            <img src="https://robohash.org/khg/?set=set3" />
                            <img src="https://robohash.org/vda/?set=set3" />
                            <img src="https://robohash.org/awfeawf/?set=set2" />
                            <img src="https://robohash.org/wefewaef/?set=set2" />
                            <img src="https://robohash.org/sdafwef/?set=set2" />
                            <img src="https://robohash.org/bsdb/?set=set2" />
                            <img src="https://robohash.org/dbsfsb/?set=set2" />
                            <img src="https://robohash.org/bfdssb/?set=set2" />
                            <img src="https://robohash.org/sdfbsfbs/?set=set2" />
                            <img src="https://robohash.org/asdv/?set=set2" />
                            <img src="https://robohash.org/wfe32/?set=set2" />
                            <img src="https://robohash.org/23f/?set=set2" />
                            <img src="https://robohash.org/sav/?set=set1" />
                            <img src="https://robohash.org/vdsa/?set=set1" />
                            <img src="https://robohash.org/va/?set=set1" />
                            <img src="https://robohash.org/f23/?set=set1" />
                            <img src="https://robohash.org/f32/?set=set1" />
                            <img src="https://robohash.org/f23/?set=set1" />
                            <img src="https://robohash.org/23/?set=set1" />
                            <img src="https://robohash.org/2f/?set=set1" />
                            <img src="https://robohash.org/f3/?set=set1" />    
                            <img src="https://robohash.org/1as/?set=set1" />    
                        </div>
                        <button onClick={this.editUser} >Save</button>
                        <input type="file" className="setting-bottom-right-upload" onChange={(e) => this.handleImageUpload(e.target.files)} />
                        <img src={this.state.image} />
                    </div>
                </div>
                <div className="setting-bottom-delete-container">
                    <div className="setting-bottom-delete">
                        <div>Delete user and all threads and replys made by the user.</div>
                        <button onClick={this.deleteUser}>Click</button>
                    </div>
                </div> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userData: state.userData
    }
}

const mapDispatchToProps = {
    updateUserData
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Setting));


