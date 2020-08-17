import React, {useState} from 'react';

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
    const [weather, setWeather] = useState<WeatherType | null>(null);

    const search = (event: any) => {
        if (event.key === 'Enter') {
            fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result);
                });
        } else {
            console.log(`${api.base}weather?q=${query}&appid=${api.key}`);
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
                </div>
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
                </section>
                )}
            </main>
        </div>
    );
}

export default App;
