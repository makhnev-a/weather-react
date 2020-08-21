import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../../store";
import {ADD_CITIES, CHANGE_INPUT_NAME, DELETE_CITY, UPDATE_CITIES, UPDATE_WEATHER} from "./citiesReducer";

export type InitialStateType = {
    cities: Array<CityType>
    inputCity: string
};

export type CityType = {
    name: string
    weather: number
};

export type ActionsType = AddCityType | UpdateCityType | ChangeInputName | UpdateWeatherType | DeleteCityType;

export type AddCityType = {
    type: typeof ADD_CITIES
    cityWeather: CityType
};

export type DeleteCityType = {
    type: typeof DELETE_CITY
    cityName: string
};

export type ChangeInputName = {
    type: typeof CHANGE_INPUT_NAME
    inputName: string
};

export type UpdateCityType = {
    type: typeof UPDATE_CITIES
    weather: number
    name: string
};

export type UpdateWeatherType = {
    type: typeof UPDATE_WEATHER
    cities: Array<CityType>
};

export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>;
export type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>;