import axios from 'axios';

const instanse = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
});

const apiKey = process.env.REACT_APP_WEATHER_KEY;

export const api = {
    getWeather(cityName: string) {
        return instanse.get(`weather?q=${cityName}&units=metric&appid=${apiKey}`)
    }
};