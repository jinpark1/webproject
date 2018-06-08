import React, { Component } from 'react';
import './Home.css';
import backgroundImg from '../../images/starimg1.jpg';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
               <section className="home-section1">s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</section>
               <section className="home-section2">
               What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
               </section>
               <section className="home-section3">this is section 3</section>
               <section className="home-section4"></section>
               <section className="home-section5"></section>
               
               {/* <img src={backgroundImg} /> */}
                
               
                this is home
             
            </div>
        );
    }
}

export default Home;


