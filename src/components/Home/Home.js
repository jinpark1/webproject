import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


class Home extends Component {
    constructor() {
        super();

        this.state = {
            active: false,
            active2: false,
            active3: false,
            active4: false
        }
    }

    changeStyle = () => {
        this.setState({
            active: true
        })
    }

    originalStyle = () => {
        this.setState({
            active: false
        })
    }

    changeStyle2 = () => {
        this.setState({
            active2: true
        })
    }

    originalStyle2 = () => {
        this.setState({
            active2: false
        })
    }

    changeStyle3 = () => {
        this.setState({
            active3: true
        })
    }

    originalStyle3 = () => {
        this.setState({
            active3: false
        })
    }

    changeStyle4 = () => {
        this.setState({
            active4: true
        })
    }

    originalStyle4 = () => {
        this.setState({
            active4: false
        })
    }
    
    render() {
        let imageFloat = 'home-communities-click'
        if (this.state.active) {
            imageFloat += ' home-communities-active';
        }

        let imageFloat2 = 'home-communities-click'
        if (this.state.active2) {
            imageFloat2 += ' home-communities-active';
        }

        let textFloat = 'home-communities-text2'
        if (this.state.active2) {
            textFloat += ' text-float';
        }

        let detailsFloat = 'home-communities-text2-details'
        if (this.state.active2) {
            detailsFloat += ' text-float'
        }

        let imageFloat3 = 'home-communities-click'
        if (this.state.active3) {
            imageFloat3 += ' home-communities-active';
        }

        let textFloat3 = 'home-communities-text3'
        if (this.state.active3) {
            textFloat3 += ' text-float';
        }

        let detailsFloat3 = 'home-communities-text3-details'
        if (this.state.active3) {
            detailsFloat3 += ' text-float'
        }

        let imageFloat4 = 'home-communities-click'
        if (this.state.active4) {
            imageFloat4 += ' home-communities-active';
        }
        

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
                                    <img onMouseEnter={this.changeStyle} 
                                        onMouseLeave={this.originalStyle} 
                                        className={imageFloat} 
                                        src="https://res.cloudinary.com/jinpark1/image/upload/v1530772055/projectForum/feedback3.jpg" 
                                        alt="images"
                                    />
                                    <div onMouseEnter={this.changeStyle} 
                                        onMouseLeave={this.originalStyle} 
                                        className="home-communities-text">
                                        <span>All Topics</span>
                                        <br/>
                                        <span className="home-communities-text-details">Everything about Tech</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="home-communities-img-one">
                                <Link to="/forum/os">
                                    <img onMouseEnter={this.changeStyle2} 
                                        onMouseLeave={this.originalStyle2} 
                                        className={imageFloat2} 
                                        src="https://res.cloudinary.com/jinpark1/image/upload/v1533692316/projectForum/os2.jpg" 
                                        alt="images"
                                    />
                                    <div onMouseEnter={this.changeStyle2} 
                                        onMouseLeave={this.originalStyle2} 
                                        className={textFloat}>
                                        <span>OS</span>
                                    </div>
                                    <div onMouseEnter={this.changeStyle2} 
                                        onMouseLeave={this.originalStyle2} 
                                        className={detailsFloat}>
                                        <span>Discuss Everything OS</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="home-communities-container">
                        <div className="home-communities-img">
                            <div className="home-communities-img-one">
                                <Link to="/forum/support">
                                    <img onMouseEnter={this.changeStyle3} 
                                        onMouseLeave={this.originalStyle3} 
                                        className={imageFloat3}  
                                        src="https://res.cloudinary.com/jinpark1/image/upload/v1530675735/projectForum/dtjzb2qhslg4a5pjcggm.jpg" 
                                        alt="images"
                                    />
                                    <div onMouseEnter={this.changeStyle3} 
                                        onMouseLeave={this.originalStyle3} 
                                        className={textFloat3}
                                        className="home-communities-text3">
                                        <span>SUPPORT</span>
                                    </div>
                                    <div onMouseEnter={this.changeStyle3} 
                                        onMouseLeave={this.originalStyle3} 
                                        className={detailsFloat3}>
                                        <span>Any Issues Post Here!</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="home-communities-img-one">
                                <Link to="/forum/hardware">
                                    <img className="home-communities-click" src="https://res.cloudinary.com/jinpark1/image/upload/v1530680083/projectForum/hardware4.jpg" alt="images"/>
                                    <div className="home-communities-text4">HARDWARE</div>
                                    <div className="home-communities-text4-details">Start the Discussion!</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;


