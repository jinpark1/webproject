import React, { Component } from 'react';
import './Trollbox.css';
// import backGroundGrey from '../../images/4kwall.jpg';
import TrollboxChat from './TrollboxChat';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class Trollbox extends Component {
    constructor(){
        super();

        this.state = {
            humidity: '',
        }
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = 'Arizona'
        const country = 'USA'
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
        const data = await api_call.json();
        if (city && country) {
          console.log('data---', data);
          this.setState({
           temperature: data.main.temp,
           city: data.name,
           country: data.sys.country,
           humidity: data.main.humidity,
           description: data.weather[0].description,
           error: "",
        });
      } else{
        this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the value."
        });
      }
    }

    render() {
        return (
            <div className="trollbox">
                <div className="trollbox-container-flex">
                    <div className="trollbox-top-container">
                        <div className="trollbox-top-child"></div>
                    </div>
                    <div className="trollbox-one-container">
                        <div className="trollbox-one-child">
                            <div className="trollbox-chat-container">
                                <TrollboxChat />
                            
                            </div>
                        </div>
                    </div>
                    {/* <div className="trollbox-two-container">two
                        <div className="trollbox-two-child">two-child</div>
                    </div>
                    <div className="trollbox-three-container">three
                        <div className="trollbox-three-child">three-child</div>
                    </div>
                    <div className="trollbox-four-container">four
                        <div className="trollbox-four-child">four-child</div>
                    </div>
                    <div className="trollbox-five-container">five
                        <div className="trollbox-five-child">five-child</div>
                    </div>
                    <div className="trollbox-six-container">six
                        <div className="trollbox-six-child">six-child</div>
                    </div> */}
                    <div className="trollbox-bottom-container">
                        <div className="trollbox-bottom-child"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Trollbox;


