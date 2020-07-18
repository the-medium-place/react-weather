import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

// const APIKEY = '63a0ab7dcd2bc7044eed273afb291f71';
const API = {

    getWeather: function(lat,lng){
        console.log(process.env.WEATHER_API_KEY)
        console.log(lat, lng);
        return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${process.env.WEATHER_API_KEY}&units=imperial`)
    },

    citySearch: function(city){
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=imperial`)
    },

    getForecastCity: function(city){
        return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=imperial`)
    }
}

export default API;