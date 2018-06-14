import React, { Component } from 'react';
import './Home.css';
import backgroundImg from '../../images/starimg1.jpg';
import backGroundGrey from '../../images/backgroundgrey3.jpg';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="home-top">
                    <div>HOME</div>
                    <img src={backGroundGrey} />
                </div>
                <section className="home-section1">
                    s simply dummy text of t
                    he priWhat is Lorem What is Lorem Ipsum?snged. It 
                    was popularised in the 1Ipsum?snged. It was popularised in
                    the 1ntWhat is Lorem Ipsum?snged. It was
                    popularised in t
                </section>
                <section className="home-section2">
                    What is Lorem Ipsum?snged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </section>
                  
                <section className="home-section3">
                <content>Hello</content>
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


