import React, { Component } from 'react';
import './Nav.css';
import starImg from '../../images/star.png';

class Nav extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    // handleScroll = () => {
    //     console.log('hi')
    //     console.log('window.scrollY', window.scrollY)
    //     const nav = document.querySelector('#navbar');
    //     if(window.scrollY <= 10 ){nav.className = ''}
    //     else {nav.className = 'scroll'}
    // }

    handleScroll = () => {
        console.log('hi')
        console.log('window.scrollY', window.scrollY)
        const nav = document.querySelector('#navbar');
        const navul = document.querySelector('#navul');
        const nava = document.querySelectorAll('#nava');
        if(window.scrollY <= 10){
            nav.className = ''
            navul.className = ''
            nava.className = ''
        } else {
            nav.className = 'scroll'
            navul.className = 'scroll'
            nava[0].className = 'scrollfont'
            nava[1].className = 'scrollfont'
            nava[2].className = 'scrollfont'
        }
    }

    render() {

        return (
           
                <nav id="navbar">
                    <ul id="navul">
                        <img src={starImg} ref='LOGO' />
                        <li><a id="nava" href="/">HOME</a></li>
                        <li><a id="nava" href="/forum">FORUM</a></li>
                        <li><a id="nava" href="/store">STORE</a></li>
                    </ul>
                    <a href="auth"><button>SIGN IN!</button></a>
                </nav>
            
        )
    }
}

export default Nav;


