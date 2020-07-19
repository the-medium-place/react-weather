import React, { Component } from 'react'
import './style.css';
import API from '../../utils/API';
import SearchForm from '../../components/SearchForm';
import Forecast from '../../components/Forecast';
import { Col } from 'react-bootstrap';


export default class Search extends Component {

    state = {
        search: '',
        forecastResults: []
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
        API.getForecastCity(this.state.search)
            .then((data) => {
                console.log(data);

                API.getWeather(data.data.city.coord.lat, data.data.city.coord.lon)
                .then((newData)=>{
                    console.log(newData)
                    for (let i = 0; i < 5; i++) {
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
                <div className="d-flex card-wrapper">
                    {this.state.forecastResults.length > 4 ? this.state.forecastResults.map((forecast, index) => {
                        return(
                        <Forecast 
                            key={index}
                            date={forecast.dt}
                            tempHI={forecast.temp.max}
                            tempLO={forecast.temp.min}
                            humidity={forecast.humidity}
                            desc={forecast.weather[0].description}
                            icon={forecast.weather[0].icon}
                        />
                        )
                    }) : <h3>Search for a city to begin!</h3>}
                </div>
            </div>


        )
    }
}
