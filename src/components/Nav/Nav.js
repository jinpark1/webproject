import React, { Component } from 'react';
import './Nav.css';
import starImg from '../../images/star.png';
import { connect } from 'react-redux';
import axios from 'axios';
import { updateUserData } from '../../ducks/reducer';

class Nav extends Component {
    constructor(){
        super();

        this.state = {
            showing: false,
            loggedIn: false,
        }
    }

    componentDidMount() {
        console.log('hit')
        // window.addEventListener('scroll', this.handleScroll);

        if(this.props.userData.email){
            this.setState({
                loggedIn: true,
            })
        }

        console.log('componentdidmount', this.props.userData.email)
        this.forceUpdate();
    }

    forceUpdate(){
        if(this.props.userData.email){
            this.setState({
                loggedIn: true,
            })
        }

        console.log('componentdidmount2', this.props.userData.email)


    }

    handleScroll = () => {
        console.log('hi')
        console.log('window.scrollY', window.scrollY)
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
            this.props.updateUserData(res.data.user)
        })
    }

    render() {
        // console.log('Nav', this.props.userData)
        console.log('1', this.props.userData.online_id)
        const hello = this.props.userData.email ? this.props.userData.email : 'waiting...';
        console.log('2',this.props.userData.email)

        console.log(this.state.loggedIn)

        return (
                <nav id="navbar">
                    <ul>
                        <img src={starImg} alt="star" />
                        <li><a id="nava" href="/">HOME</a></li>
                        <li><a id="nava" href="/forum">FORUMS</a></li>
                        <li><a id="nava" href="/trollbox">TROLLBOX{this.props.userData.email}</a></li>
                    </ul>
                    { hello ? <a href="/auth"><button>SIGN IN!</button></a> : <button onClick={ () => this.showMenu() }>Welcome {this.props.userData.online_id}}</button>} 
                    {/* {!this.state.loggedIn && <button onClick={ () => this.showMenu() }>Welcome Whoever</button>} */}
                    {this.state.showing && <div className="nav-menu">
                        <a href="/profile"><button className="nav-menu-button1">Profile</button></a>
                        <a href="/settings"><button className="nav-menu-button2">Settings</button></a>
                        <button className="nav-menu-button3" onClick={this.logoutUser}>Sign out</button>
                    </div>}
                </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(Nav);


