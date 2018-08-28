import React, { Component } from 'react';
import './Nav.css';
import starImg from '../../images/star.png';
import { connect } from 'react-redux';
import axios from 'axios';
import { updateUserData } from '../../ducks/reducer';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Drawer from './Drawer/Drawer';

const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

class Nav extends Component {
    constructor(props){
        super();

        this.state = {
            showing: false,
            loggedIn: false
        }

        
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
        console.log('nav------', this.props)
        const { classes } = this.props;
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
                            { this.state.showing && 
                                <div className="nav-menu">
                                <a href="/settings"><button className="nav-menu-button2">Settings</button></a>
                                <a href="/contact"><button className="nav-menu-button3">Contact</button></a>
                                <button className="nav-menu-button4" onClick={this.logoutUser}>Sign out</button>
                                </div>
                            }
                        </nav>
                    </div>
                    <div className="navbar-media-query">
                    <div className={classes.root}>
                        <AppBar position="fixed" style={{ backgroundColor: '#14191e' }}>
                            <Toolbar>
                                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                                    <Drawer />
                                </IconButton>
                                <Typography variant="title" color="inherit" className={classes.flex}>
                                    {/* The Tech Forums */}
                                </Typography>
                                <Button color="inherit" href="/auth">Login</Button>
                            </Toolbar>
                        </AppBar>
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

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav)));


