import React, { Component } from 'react'
import './style.css';
import API from '../../utils/API';
import SearchForm from '../../components/SearchForm';
import Forecast from '../../components/Forecast';
import { Col } from 'react-bootstrap';


export default class Search extends Component {

    state = {
        search: '',
        results: []
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
                // console.log(data);
                for (let i = 0; i < data.data.list.length; i += 8) {
                    forecastArr.push(data.data.list[i]);
                }
                this.setState({
                    results: forecastArr,
                })
                console.log(this.state.results);
            })
    }

    // renderResults = () => {
    //     if (this.state.results.length < 1) {
    //         return <h1>test</h1>;
    //     } else {
    //         return (<div>
    //             {}
    //         </div>);

    //     }

    // }




    render() {
        return (

            <div className="d-flex search-box">

                <SearchForm getResults={this.getResults} handleInputChange={this.handleInputChange} />
                <div className="d-flex card-wrapper">
                    {this.state.results.length > 4 ? this.state.results.map((forecast, index) => {
                        return(
                        <Forecast 
                            key={index}
                            date={forecast.dt_txt.substr(0,10)}
                            temp={forecast.main.temp}
                            humidity={forecast.main.humidity}
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
