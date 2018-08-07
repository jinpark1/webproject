import React, { Component } from 'react';
import './Home.css';


class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home-main-photo">
                    <div class="home-description">
                        <span>THE TECH FORUM</span>  
                    </div>
                </div>
                <div className="home-communities">
                    <div className="home-communities-container">
                        <div className="home-communities-top">
                            <img src="https://res.cloudinary.com/jinpark1/image/upload/v1530772055/projectForum/feedback3.jpg" alt="images"/>
                            <img src="https://res.cloudinary.com/jinpark1/image/upload/v1530772055/projectForum/feedback3.jpg" alt="images" />
                        </div>
                        <div className="home-communities-bot">
                        
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;


