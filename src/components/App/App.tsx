import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from '../../redux/store';
import {SearchBox} from "../SearchBox/SearchBox";
import {WeatherCard} from "../WeatherCard/WeatherCard";
import {Popup} from "../Popup/Popup";
import {WeatherType} from '../WeatherCard/types';
import {addCityThunk, deleteCityAc, updateWeaterThunk} from "../../redux/reducers/cities/citiesReducer";
import {api} from '../../api/api';
import {TownType} from "../../redux/reducers/citiesList/types";
import {setQueryAc} from '../../redux/reducers/citiesList/citiesList.reducer';

type PropsType = {
    dateBuilder: (d: any) => string
    getTime: (timestamp: number) => string
};

const App = ({dateBuilder, getTime}: PropsType) => {
    const [dropdown, setDropdown] = useState(false);
    const [showList, setShowList] = useState(false);
    const [weather, setWeather] = useState<WeatherType | null>(null);

    const dispatch = useDispatch();
    const {cities} = useSelector((state: AppStateType) => state.cities);
    const [towns, query] = useSelector((state: AppStateType) => [
        state.townsList.towns.filter((it: TownType) => it.name.toLowerCase().includes(state.townsList.query.toLowerCase())),
        state.townsList.query
    ]);

    const getWeather = (query: string) => {
        return api.getWeather(query).then(result => {
            setWeather(result.data);
            dispatch(setQueryAc(''));
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

    const onDropdownShow = () => {
        setDropdown(true);
        setShowList(false);
    };

    const onDropdownHide = () => setDropdown(false);

    const onBtnSearchClick = () => {
        setShowList((prevState) => !prevState);
        dispatch(updateWeaterThunk(cities));
        setDropdown(false);
    };

    const onChangeSearchQuery = (event: ChangeEvent<HTMLInputElement>) => dispatch(setQueryAc(event.currentTarget.value));

    const setCity = (cityName: string) => {
        dispatch(setQueryAc(cityName));
        getWeather(cityName);
        onDropdownHide();
    };

    const onAddSetCity = (cityName: string) => {
        dispatch(addCityThunk(cityName));
        setCity(cityName);
    };

    const addCityToList = (cityName: string) => {
        if (cities.length <= 0) {
            onAddSetCity(cityName);
        } else {
            let city = cities.find(({name}) => name === cityName);
            !city ? onAddSetCity(cityName) : setCity(cityName);
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
                {
                    showList
                        ? <Popup cities={cities} showWeather={showWeather} deleteCity={deleteCity}/>
                        : typeof weather?.main !== 'undefined' && (
                        <WeatherCard
                            weather={weather}
                            dateBuilder={dateBuilder}
                            getTime={getTime}
                        />
                    )
                }
            </main>
        </div>
    );
}

export default App;