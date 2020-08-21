import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from '../../redux/store';
import {SearchBox} from "../SearchBox/SearchBox";
import {WeatherCard} from "../WeatherCard/WeatherCard";
import {Popup} from "../Popup/Popup";
import {WeatherType} from '../WeatherCard/types';
import {addCityThunk, deleteCityAc, updateWeaterThunk} from "../../redux/reducers/cities/citiesReducer";
import {api} from '../../api/api';

type PropsType = {
    dateBuilder: (d: any) => string
    getTime: (timestamp: number) => string
};

const App = ({dateBuilder, getTime}: PropsType) => {
    const [query, setQuery] = useState('');
    const [dropdown, setDropdown] = useState(false);
    const [showList, setShowList] = useState(false);
    const [weather, setWeather] = useState<WeatherType | null>(null);

    const dispatch = useDispatch();
    const {cities} = useSelector((state: AppStateType) => state.cities);
    const {towns} = useSelector((state: AppStateType) => state.townsList);

    const getWeather = (query: string) => {
        return api.getWeather(query).then(result => {
            setWeather(result.data);
            setQuery('');
        });
    };

    const showWeather = (cityName: string) => {
        getWeather(cityName).then(res => res);
        setShowList((prevState) => !prevState);
    };

    const search = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            getWeather(query).then(res => res);
        }
    };

    const onDropdownShow = () => setDropdown(true);
    const onDropdownHide = () => setDropdown(false);

    const onBtnSearchClick = () => {
        setShowList((prevState) => !prevState);
        dispatch(updateWeaterThunk(cities));
    };

    const onChangeSearchQuery = (event: ChangeEvent<HTMLInputElement>) => setQuery(event.currentTarget.value);

    const addCityToList = (cityName: string) => {
        if (cities.length <= 0) {
            dispatch(addCityThunk(cityName));
        } else {
            let city = cities.find(({name}) => name === cityName);

            if (!city) {
                dispatch(addCityThunk(cityName));
            }
        }
    };

    const deleteCity = (cityName: string) => dispatch(deleteCityAc(cityName));

    return (
        <div
            className={(typeof weather?.main !== 'undefined') ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
            <main>
                <div className="search-box">
                    <SearchBox
                        inputChange={onChangeSearchQuery}
                        inputKeyPress={search}
                        inputValue={query}
                        towns={towns}
                        addCityToList={addCityToList}
                        dropdown={dropdown}
                        showDropdown={onDropdownShow}
                        hideDropdown={onDropdownHide}
                        onBtnSearchClick={onBtnSearchClick}
                    />
                </div>
                {showList && (<Popup cities={cities} showWeather={showWeather} deleteCity={deleteCity}/>)}
                {typeof weather?.main !== 'undefined' && (
                    <WeatherCard
                        weather={weather}
                        dateBuilder={dateBuilder}
                        getTime={getTime}
                    />
                )}
            </main>
        </div>
    );
}

export default App;