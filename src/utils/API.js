import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const APIKEY = process.env.REACT_APP_WEATHER_API_KEY;


const API = {

    getWeather: function(lat,lng){
        return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${APIKEY}&units=imperial`)
    },

    getWeatherCity: function(city){
        return axios.get(`https://api.openweathermap.org/data/2.5/onecall?q=${city}&appid=${APIKEY}&units=imperial`)

    },

    citySearch: function(city){
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=imperial`)
    },

    getForecastCity: function(city){
        return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}&units=imperial`)
    }
}

export default API;