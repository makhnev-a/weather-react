import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { AppStateType } from './redux/store';
import {addCityThunk} from "./redux/reducers/citiesReducer";

const api = {
    key: '330216f9e3042b8a57a7865c3de67865',
    base: 'https://api.openweathermap.org/data/2.5/'
};

type WeatherType = {
    base: string
    clouds: WeatherCloudsType
    cod: number
    coord: WeatherCoordType
    dt: number
    id: number
    main: WeatherMainType
    name: string
    sys: WeatherSysType
    timezone: number
    visibility: number
    weather: Array<WeatherOneType>
    wind: WeatherWindType
};

type WeatherCloudsType = {
    all: number
};

type WeatherCoordType = {
    lon: number
    lat: number
};

type WeatherMainType = {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
};

type WeatherWindType = {
    speed: number
    deg: number
};

type WeatherSysType = {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
};

type WeatherOneType = {
    description: string
    icon: string
    id: number
    main: string
};

function App() {
    const [query, setQuery] = useState('');
    const {cities} = useSelector((state: AppStateType) => state.cities);
    const dispatch = useDispatch();
    const [showList, setShowList] = useState(false);
    const [weather, setWeather] = useState<WeatherType | null>(null);

    const search = (event: any) => {
        // if (event.key === 'Enter') {
        //     fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        //         .then(res => res.json())
        //         .then(result => {
        //             setWeather(result);
        //             setQuery('');
        //             console.log(result);
        //         });
        // }

        if (event.key === 'Enter') {
            dispatch(addCityThunk(query)).then((res: any) => {
                debbuger;
                console.log(res);
            });
        }
    };

    const dateBuilder = (d: any) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`;
    };

    const getTime = (timestamp: number) => {
        const date = new Date(timestamp * 1000);
        const hour = date.getHours();
        const minute = date.getMinutes();

        if (hour < 10 && minute < 10) {
            return `0${hour}:0${minute}`;
        } else if (hour < 10) {
            return `0${hour}:${minute}`;
        } else if (minute < 10) {
            return `${hour}:0${minute}`;
        }

        return `${date.getHours()}:${date.getMinutes()}`;
    };

    const onBtnSearchClick = () => {
        setShowList((prevState) => !prevState);
    };

    return (
        <div className={(typeof weather?.main !== 'undefined') ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
            <main>
                <div className="search-box">
                    <input
                        type="text"
                        className={'search-bar'}
                        placeholder={'Search...'}
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    />
                    <button
                        type='button'
                        className='search-btn'
                        onClick={onBtnSearchClick}
                    >
                        <svg
                            className='search-icon'
                            fill={'green'}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512.001 512.001"
                        >
                            <path d="M257.297.004l-.053-.001c-.082 0-.163-.003-.244-.003h-.036l-.097.001C115.786.073 0 114.252 0 255c0 34.416 6.855 67.932 20.376 99.618 26.177 61.348 75.527 110.772 137.005 137.005 31.682 13.519 65.194 20.375 99.605 20.376l.027.002.07-.003C398.634 511.953 512 395.326 512 255 512 114.274 398.242.163 257.297.004zm-49.98 35.439C181.736 59.695 160.835 88.099 145.096 120H75.515c31.911-42.04 78.322-72.675 131.802-84.557zM56.286 149.8h75.991c-10.493 28.747-16.697 59.387-18.298 90.2H30.517c2.157-32.328 11.232-63.007 25.769-90.2zm.565 212.2c-14.89-27.74-24.173-58.913-26.342-92h83.368c1.432 31.496 7.682 62.631 18.402 92H56.851zm19.278 30h68.967c15.709 31.842 36.581 60.236 62.154 84.494-53.113-11.923-99.243-42.511-131.121-84.494zm67.792-122h98.078v92h-77.373c-11.978-28.858-19.096-59.919-20.705-92zm98.08 197.115A272.473 272.473 0 01179.27 392H242v75.115zm0-227.115h-97.979c1.799-31.373 8.876-61.742 20.606-90h77.373v90zm0-120h-62.729a272.485 272.485 0 0162.729-75.116V120zm213.944 30a223.35 223.35 0 0125.543 90H400.02c-1.601-30.813-7.805-61.253-18.298-90h74.223zm-19.058-30h-67.982c-15.697-31.817-36.546-60.189-62.088-84.433C359.585 47.541 405.369 78.11 436.887 120zM272.001 44.89A272.489 272.489 0 01334.738 120h-62.737V44.89zM272 150h77.392c11.728 28.256 18.789 58.629 20.588 90H272v-90zm98.088 119.8c-1.608 32.079-8.719 63.344-20.696 92.2H272v-92.2h98.088zm-98.087 197.31V391.8h62.737c-16.08 28.38-37.234 54.073-62.737 75.31zm34.884 9.258c25.491-24.21 46.326-52.757 62.019-84.568h67.373c-31.481 41.83-76.987 72.553-129.392 84.568zM381.723 362c10.72-29.369 16.97-60.704 18.402-92.2h81.372c-2.15 33.087-11.351 64.46-26.11 92.2h-73.664z"/>
                        </svg>
                    </button>
                </div>

                {showList && (
                    <div className='search-popup'>
                        test
                    </div>
                )}

                {typeof weather?.main !== 'undefined' && (
                <section>
                    <div className="location-box">
                        {weather && (
                            <div className="location">{weather.name}, {weather.sys.country}</div>
                        )}
                        {/*<div className="location">{weather.name}, {weather.sys.country}</div>*/}
                        <div className="date">{dateBuilder(new Date())}</div>
                    </div>

                    <div className="weather-box">
                        <div className="temp">
                            {Math.round(weather.main.temp)}°C
                        </div>
                        <div className="weather">{weather.weather[0].main}</div>
                    </div>
                    <div className='weather-params'>
                        <div className='humidity'>{weather.main.humidity}%</div>
                        <div className='pressure'>{weather.main.pressure}mBar</div>
                        <div className='wind'>{weather.wind.speed}km/h</div>
                    </div>
                    <div className='weather-time'>
                        <div className='sunrize'>{getTime(weather.sys.sunrise)}</div>
                        <div className='sunrize'>{getTime(weather.sys.sunset)}</div>
                        <div className='dt'>{getTime(weather.dt)}</div>
                    </div>
                </section>
                )}
            </main>
        </div>
    );
}

export default App;
