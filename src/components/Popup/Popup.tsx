import React from "react";
import {CityType} from "../../redux/reducers/cities/types";

type PropsType = {
    cities: Array<CityType>
};

export const Popup = ({cities}: PropsType) => {
    return (
        <div className='search-popup'>
            <ul>
                {cities.map((city: CityType) => {
                    return <li>{city.name} - {city.weather}</li>
                })}
            </ul>
        </div>
    );
};