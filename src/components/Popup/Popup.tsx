import React from "react";
import {CityType} from "../../redux/reducers/cities/types";

type PropsType = {
    cities: Array<CityType>
    showWeather: (citiName: string) => void
    deleteCity: (cityName: string) => void
};

export const Popup = ({cities, showWeather, deleteCity}: PropsType) => {
    return (
        <div className='search-popup'>
            <div>
                {cities.map((city: CityType, index: number) =>
                    <div className='popup-row' key={`popup${index}`}>
                        <span
                            onClick={() => showWeather(city.name)}
                            key={`popupItem${index}`}
                        >{city.name} - {Math.round(city.weather)}°C</span>
                        <span onClick={() => deleteCity(city.name)}>Del</span>
                    </div>
                )}
            </div>
        </div>
    );
};