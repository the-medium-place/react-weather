import React, { Component } from 'react'
import API from '../../utils/API';
import { Fade, Bounce } from 'react-awesome-reveal';
import './style.css';
import { motion } from 'framer-motion';
// import { Frame } from 'framer';

export default class CurrentCard extends Component {


    state = {
        lng: null,
        lat: null,
        temp: null,
        humidity: null,
        icon: null,
        desc: null,
        date: null
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                lng: position.coords.longitude,
                lat: position.coords.latitude
            })
            API.getWeather(position.coords.latitude, position.coords.longitude)
                .then((data) => {
                    console.log(data);
                    this.setState({
                        temp: data.data.current.temp,
                        humidity: data.data.current.humidity,
                        iconSRC: `http://openweathermap.org/img/wn/${data.data.current.weather[0].icon}@4x.png`,
                        desc: data.data.current.weather[0].description,
                        uvi: data.data.current.uvi,
                        date: data.data.current.sunrise



                    })
                })
        })
    };

    render() {
        const newDate = new Date(this.state.date);
        console.log(newDate)
        return (
                <Fade>
                    <Bounce>
                            <motion.div 
                            className="d-flex current-card"
                            whileHover={{ scale: 1.2 }} >
                                <div className="text-center">
                                    {(!this.state.iconSRC) ?
                                        <h1>Loading Weather...</h1> :
                                        <>
                                            <h1>{this.state.temp}&deg;F</h1>
                                            <h4>{this.state.humidity}% Humidity</h4>
                                                <motion.img 
                                                animate={{ y: "-15px" }}
                                                transition={{ ease: "easeInOut", duration: 0.6, yoyo: Infinity }}
                                                // drag="x" 
                                                // dragConstraints={{ left: -100, right: 100 }} 
                                                // whileHover={{ scale: 1.6 }}
                                                // whileTap={{scale: 0.9}}
                                                src={this.state.iconSRC} 
                                                alt="weather icon" 
                                                className="weather-icon"
                                                />  
                                            <p>{(this.state.desc).toUpperCase()}</p>
                                        </>
                                    }
                                </div>
                            </motion.div>
                    </Bounce>
                </Fade>               
        )

    }


}
