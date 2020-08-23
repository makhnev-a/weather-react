import React from "react";
import {WeatherType} from "./types";

type PropsType = {
    weather: WeatherType
    dateBuilder: (date: any) => string
    getTime: (timestamp: number) => string
};

export const WeatherCard = ({weather, dateBuilder, getTime}: PropsType) => {
    return (
        <section>
            <div className="location-box">
                {weather && (
                    <div className="location">{weather.name}, {weather.sys.country}</div>
                )}
                <div className="date">{dateBuilder(new Date())}</div>
            </div>

            <div className="weather-box">
                <div className="temp">
                    {Math.round(weather.main.temp)}°C
                </div>
                <div className="weather">{weather.weather[0].main}</div>
            </div>
            <div className='weather-params'>
                <div className='humidity'>
                    {weather.main.humidity}%
                    <div>humidity</div>
                </div>
                <div className='pressure'>
                    {weather.main.pressure}mBar
                    <div>pressure</div>
                </div>
                <div className='wind'>
                    {weather.wind.speed}km/h
                    <div>wind</div>
                </div>
            </div>
            <div className='weather-time'>
                <div className='sunrize'>
                    {getTime(weather.sys.sunrise)}
                    <div>sunrize</div>
                </div>
                <div className='sunrize'>
                    {getTime(weather.sys.sunset)}
                    <div>sunrize</div>
                </div>
                <div className='dt'>
                    {getTime(weather.dt)}
                    <div>dt</div>
                </div>
            </div>
        </section>
    );
};