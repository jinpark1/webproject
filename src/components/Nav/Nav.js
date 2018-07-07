import React, { Component } from 'react';
import './Nav.css';
import starImg from '../../images/star.png';
import { connect } from 'react-redux';
import axios from 'axios';
import { updateUserData } from '../../ducks/reducer';
import { withRouter } from 'react-router-dom';

class Nav extends Component {
    constructor(){
        super();

        this.state = {
            showing: false,
            loggedIn: false,
        }

        console.log("mount")
     

    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);

        if(this.props.userData.email){
            this.setState({
                loggedIn: true,
            })
        }  
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.userData.email){
            this.setState({
                loggedIn: true,
            })
        }
    }

    handleScroll = () => {
        const nav = document.querySelector('#navbar');
        const nava = document.querySelectorAll('#nava');
        if(window.scrollY <= 10){
            nav.className = ''
            nava.className = ''
        } else {
            nav.className = 'scroll'
            nava[0].className = 'scrollfont'
            nava[1].className = 'scrollfont'
            nava[2].className = 'scrollfont'
        }
    }

    showMenu = () => {
        this.setState({
            showing: !this.state.showing
        })
    }

    logoutUser = () => {
        axios.post(`/api/logout`).then( res => {
            this.setState({
                loggedIn: false,
                showing: false
            })
            this.props.updateUserData({})
            this.props.history.push('/forum')
        })

    }

    render() {
        // console.log('Nav', this.props.userData)
        
        console.log('1', this.props.userData.online_id)
        const hello = this.props.userData.email ? this.props.userData.email : 'waiting...';
        console.log('2',this.props.userData.email)

        console.log(this.state.loggedIn)

        return (
                <div className="navbar-container-flex">
                    <div className="navbar-flex-child">
                        <nav id="navbar">
                            <ul>
                                <img src={starImg} alt="star" />
                                <li><a id="nava" href="/">HOME</a></li>
                                <li><a id="nava" href="/forum">FORUMS</a></li>
                                <li><a id="nava" href="/trollbox">TROLLBOX</a></li>
                            </ul>
                            { !this.state.loggedIn ? <a href="/auth"><button>SIGN IN!</button></a> : <button onClick={ () => this.showMenu() }>Welcome {this.props.userData.online_id}</button>} 
                            {this.state.showing && <div className="nav-menu">
                                <a href="/profile"><button className="nav-menu-button1">Profile</button></a>
                                <a href="/settings"><button className="nav-menu-button2">Settings</button></a>
                                <a href="/contact"><button className="nav-menu-button3">Contact</button></a>
                                <button className="nav-menu-button4" onClick={this.logoutUser}>Sign out</button>
                            </div>}
                        </nav>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));


