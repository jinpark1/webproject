import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home-main-photo">
                    <div class="home-description">
                        <span>THE TECH FORUMS</span>  
                    </div>
                </div>
                <div className="home-communities">
                    <div className="home-communities-container">
                        <div className="home-communities-img">
                            <div className="home-communities-img-one">
                                <Link to="/forum">
                                    <img className="home-communities-click" src="https://res.cloudinary.com/jinpark1/image/upload/v1530772055/projectForum/feedback3.jpg" alt="images"/>
                                    <div className="home-communities-text">All Topics</div>
                                    <div className="home-communities-text-details">Everything about Tech</div>
                                </Link>
                            </div>
                                <Link to="/forum/os">
                                    <img className="home-communities-click" src="https://res.cloudinary.com/jinpark1/image/upload/v1533692316/projectForum/os2.jpg" alt="images"/>
                                    <div className="home-communities-text2">OS</div>
                                    <div className="home-communities-text2-details">Discuss Everything OS</div>
                                </Link>
                        
                        </div>
                    </div>
                    <div className="home-communities-container">
                        <div className="home-communities-img">
                            <Link to="/forum/support">
                                <img className="home-communities-click" src="https://res.cloudinary.com/jinpark1/image/upload/v1530675735/projectForum/dtjzb2qhslg4a5pjcggm.jpg" alt="images"/>
                                <div className="home-communities-text3">SUPPORT</div>
                                <div className="home-communities-text3-details">Any Issues Post Here!</div>
                            </Link>
                            <Link to="/forum/hardware">
                                <img className="home-communities-click" src="https://res.cloudinary.com/jinpark1/image/upload/v1530680083/projectForum/hardware4.jpg" alt="images"/>
                                <div className="home-communities-text4">HARDWARE</div>
                                <div className="home-communities-text4-details">Start the Discussion!</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;


