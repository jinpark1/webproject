import React, { Component } from 'react';
import './Home.css';
import backgroundImg from '../../images/starimg1.jpg';
import backGroundGrey from '../../images/backgroundgrey.jpg';
import nodeLogo from '../../images/nodejs5.png';
import postgresLogo from '../../images/postgresql.png';
import reactLogo from '../../images/reactlogo.png';
import javaScript2 from '../../images/logo-javascript.svg';
import heroku from '../../images/heroku.png';
import glow from '../../images/blackimageglow.jpg';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home-top">
                    {/* <div>HOME</div> */}
                    <img src={glow} alt="backGroundGrey" />
                </div>

                <div className="home-description">
                    {/* <div className="home-description-text">Welcome to the tech forum, feel free to discuss anything.</div> */}
                </div>
                <div className="home-skill-title">Built with...</div>
                <div className="home-skill-container">
                    <div className="home-skill">
                        <img src={reactLogo} alt="starimg1"/>
                        <img src={javaScript2} alt="starimg1"/>
                        <img src={nodeLogo} alt="starimg1"/>
                        <img src={heroku} alt="starimg1"/>
                        <img src={postgresLogo} alt="starimg1"/>
                    </div>
                </div>             
            </div>
        );
    }
}

export default Home;


