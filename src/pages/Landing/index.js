import API from '../../utils/API';

import React, { Component } from 'react'
import CurrentCard from '../../components/CurrentCard';
import './style.css';

export default class Landing extends Component {

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
                    const newDate = new Date(data.data.current.dt*1000).toLocaleString();
                    console.log(newDate);
                    this.setState({
                        temp: data.data.current.temp,
                        humidity: data.data.current.humidity,
                        iconSRC: `http://openweathermap.org/img/wn/${data.data.current.weather[0].icon}@4x.png`,
                        desc: data.data.current.weather[0].description,
                        uvi: data.data.current.uvi,
                        date: newDate



                    })
                })
        })
    };

    render(){

        return(    
            <div className="landing-box">        
                <header>
                    <h1 className="text-center">Current Weather in Your Area</h1>
                </header>
                <CurrentCard
                     temp={this.state.temp}
                     humidity={this.state.humidity}
                     iconSRC={this.state.iconSRC}
                     desc={this.state.desc}
                     uvi={this.state.uvi}
                     date={this.state.date} />    
            </div>
        )
    }
}





