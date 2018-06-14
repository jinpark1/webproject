import React, { Component } from 'react';
import './Nav.css';
import starImg from '../../images/star.png';

class Nav extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
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

    render() {

        return (
           
                <nav id="navbar">
                    <ul>
                        <img src={starImg} alt="star" />
                        <li><a id="nava" href="/">HOME</a></li>
                        <li><a id="nava" href="/forum">FORUMS</a></li>
                        <li><a id="nava" href="/trollbox">TROLLBOX</a></li>
                    </ul>
                    <a href="auth"><button>SIGN IN!</button></a>
                </nav>
            
        )
    }
}

export default Nav;


