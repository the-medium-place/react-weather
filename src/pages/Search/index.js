import React, { Component } from 'react'
import './style.css';
import API from '../../utils/API';
import SearchForm from '../../components/SearchForm';
import Forecast from '../../components/Forecast';
import CurrentCard from '../../components/CurrentCard';
import { Col } from 'react-bootstrap';


export default class Search extends Component {

    state = {
        search: '',
        forecastResults: [],
        temp: null,
        humidity: '',
        iconSRC: '',
        desc: '',
        uvi: '',
        date: ''
    }

    handleInputChange = event => {
        const value = event.target.value;
        this.setState({
            search: value
        });
    }

    getResults = (event) => {
        const forecastArr = [];
        event.preventDefault();
        API.citySearch(this.state.search)
            .then((data) => {
                console.log(data);
                this.setState({
                    temp: data.data.main.temp,
                    humidity: data.data.main.humidity,
                    iconSRC: `http://openweathermap.org/img/wn/${data.data.weather[0].icon}@4x.png`,
                    desc: data.data.weather[0].description,
                    uvi: '',
                    // date: data.data.dt

                })
                console.log(this.state)

                API.getWeather(data.data.coord.lat, data.data.coord.lon)
                    .then((newData) => {
                        console.log(newData)
                        for (let i = 1; i < 6; i++) {
                            forecastArr.push(newData.data.daily[i]);
                        }
                        this.setState({
                            forecastResults: forecastArr
                        })
                        console.log(this.state.forecastResults);

                    })
            })
    }




    render() {
        return (

            <div className="d-flex search-box">

                <SearchForm getResults={this.getResults} handleInputChange={this.handleInputChange} />
                <div className="search-current d-flex text-center">
                    {this.state.temp ?
                        <>
                            <h2>Current Weather</h2>
                            <CurrentCard
                                temp={this.state.temp}
                                humidity={this.state.humidity}
                                iconSRC={this.state.iconSRC}
                                desc={this.state.desc}
                                uvi={this.state.uvi}
                                date={this.state.date}
                            />
                        </> : console.log('nothing')
                    }
                </div>
                    <div className="text-center forecast-title">
                    {this.state.forecastResults.length > 4 ? <h2>5-Day Forecast</h2> : console.log('nothing')}
                    </div>
                <div className="d-flex card-wrapper text-center">
                    {this.state.forecastResults.length > 4 ? this.state.forecastResults.map((forecast, index) => {
                        return (
                            <>
                                <Forecast
                                    key={index}
                                    date={forecast.dt}
                                    tempHI={forecast.temp.max}
                                    tempLO={forecast.temp.min}
                                    humidity={forecast.humidity}
                                    desc={forecast.weather[0].description}
                                    icon={forecast.weather[0].icon}
                                />
                            </>
                        )
                    }) : <h3>Search for a city to begin!</h3>}
                </div>
            </div>


        )
    }
}
