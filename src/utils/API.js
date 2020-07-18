import axios from 'axios';

const APIKEY = '63a0ab7dcd2bc7044eed273afb291f71';
const API = {

    getWeather: function(lat,lng){
        console.log(lat, lng);
        return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${APIKEY}&units=imperial`)
    },

    citySearch: function(city){
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=imperial`)
    },

    getForecastCity: function(city){
        return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}&units=imperial`)
    }
}

export default API;