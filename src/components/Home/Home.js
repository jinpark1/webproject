import React, { Component } from 'react';
import './Home.css';
import backgroundImg from '../../images/starimg1.jpg';
import backGroundGrey from '../../images/backgroundgrey3.jpg';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home-top">
                    <div>HOME</div>
                    <img src={backGroundGrey} alt="backGroundGrey" />
                </div>
                <section className="home-section1">
                    Welcome to the forum, feel free to discuss anything.
                </section>
                <section className="home-section2">
                </section>
                  
                <section className="home-section3">
                </section>
               
                <section className="home-section4"></section>
                
                <section className="home-section5">
                    <content>
                        <div><img src={backgroundImg} alt="starimg1"/></div>
                        <div><img src={backgroundImg} alt="starimg1"/></div>
                        <div><img src={backgroundImg} alt="starimg1"/></div>
                    </content>
                </section>
               
               
             
            </div>
        );
    }
}

export default Home;


