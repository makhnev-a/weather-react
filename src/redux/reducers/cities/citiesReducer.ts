import {api} from "../../../api/api";
import {
    ActionsType,
    AddCityType, ChangeInputName,
    CityType, DeleteCityType,
    InitialStateType,
    ThunkDispatchType,
    ThunkType,
    UpdateCityType, UpdateWeatherType
} from "./types";
import {WeatherType} from "../../../components/WeatherCard/types";

const initialState: InitialStateType = {
    cities: [],
    inputCity: ''
};

export const ADD_CITIES = 'Reducers/CitiesReducer/ADD_CITIES';
export const UPDATE_CITIES = 'Reducers/CitiesReducer/UPDATE_CITIES';
export const CHANGE_INPUT_NAME = 'Reducers/CitiesReducer/CHANGE_INPUT_NAME';
export const UPDATE_WEATHER = 'Reducers/CitiesReducer/UPDATE_WEATHER';
export const DELETE_CITY = 'Reducers/CitiesReducer/DELETE_CITY';

export const citiesReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_CITIES:
            return {...state, cities: [...state.cities, action.cityWeather]};
        case UPDATE_CITIES:
            return {
                ...state,
                cities: state.cities.map((city: any) => {
                    if (city.name === action.name) {
                        return {...city, weather: action.weather};
                    }

                    return city;
                })
            };
        case CHANGE_INPUT_NAME:
            return {...state, inputCity: action.inputName};
        case UPDATE_WEATHER:
            return {...state, cities: action.cities};
        case DELETE_CITY:
            return {
                ...state,
                cities: state.cities.filter((city: CityType) => {
                    if (city.name !== action.cityName) {
                        return city;
                    }
                })
            };
        default:
            return state;
    }
};

// Actions
export const addCityAc = (cityWeather: CityType): AddCityType => ({
    type: ADD_CITIES,
    cityWeather
});

export const deleteCityAc = (cityName: string): DeleteCityType => ({
    type: DELETE_CITY,
    cityName
});

export const changeInputName = (inputName: string): ChangeInputName => ({
    type: CHANGE_INPUT_NAME,
    inputName
});

export const updateCityAc = (name: string, weather: number): UpdateCityType => ({
    type: UPDATE_CITIES,
    weather,
    name
});

export const updateWeatherAc = (cities: Array<CityType>): UpdateWeatherType => ({
    type: UPDATE_WEATHER,
    cities
});

// Thunks
export const addCityThunk = (cityName: string): ThunkType => (dispatch: ThunkDispatchType) => {
    return api.getWeather(cityName)
        .then(res => {
            const cityObj = {
                name: res.data.name,
                weather: res.data.main.temp
            };

            dispatch(addCityAc(cityObj));
        })
};

export const updateWeaterThunk = (cities: Array<CityType>): ThunkType => async (dispatch: ThunkDispatchType) => {
    const promises = cities.map((city: CityType) => api.getWeather(city.name));
    const results = await Promise.all(promises);
    const weather = [];

    for await (const result of results) {
        weather.push(result.data);
    }

    const newCities = weather.map((w: WeatherType) => {
        return {
            name: w.name,
            weather: w.main.temp
        };
    });

    dispatch(updateWeatherAc(newCities));
};