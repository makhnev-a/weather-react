import React from "react";
import {CityType} from "../../redux/reducers/cities/types";

type PropsType = {
    cities: Array<CityType>
    showWeather: (citiName: string) => void
};

export const Popup = ({cities, showWeather}: PropsType) => {
    return (
        <div className='search-popup'>
            <ul>
                {cities.map((city: CityType, index: number) =>
                    <li
                        onClick={() => showWeather(city.name)}
                        key={`popupItem${index}`}
                    >{city.name} - {city.weather}</li>)}
            </ul>
        </div>
    );
};