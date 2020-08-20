import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from './redux/store';
import {filterTownsAc} from "./redux/reducers/citiesList/citiesList.reducer";
import {SearchBox} from "./components/SearchBox/SearchBox";
import {WeatherCard} from "./components/WeatherCard/WeatherCard";
import {ButtonList} from "./components/SearchBox/ButtonList/ButtonList";
import {Popup} from "./components/Popup/Popup";
import { WeatherType } from './components/WeatherCard/types';

const api = {
    key: '330216f9e3042b8a57a7865c3de67865',
    base: 'https://api.openweathermap.org/data/2.5/'
};

const App = () => {
    const [query, setQuery] = useState('');
    const {cities} = useSelector((state: AppStateType) => state.cities);
    const {towns} = useSelector((state: AppStateType) => state.townsList);

    const dispatch = useDispatch();
    const [showList, setShowList] = useState(false);
    const [weather, setWeather] = useState<WeatherType | null>(null);

    const search = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result);
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

    const onBtnSearchClick = () => setShowList((prevState) => !prevState);
    const onChangeSearchQuery = (event: ChangeEvent<HTMLInputElement>) => setQuery(event.currentTarget.value);
    const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => dispatch(filterTownsAc(e.currentTarget.value));

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
                    />
                    <ButtonList onBtnSearchClick={onBtnSearchClick}/>
                </div>

                {showList && (
                    <Popup cities={cities}/>
                )}

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