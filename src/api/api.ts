import axios from 'axios';

const instanse = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
});

// const apiKey = '330216f9e3042b8a57a7865c3de67865';
const apiKey = process.env.REACT_APP_WEATHER_KEY;

console.log(process.env)
export const api = {
    getWeather(cityName: string) {
        return instanse.get(`weather?q=${cityName}&units=metric&appid=${apiKey}`)
    }
};