import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../../store";
import { ADD_CITIES, UPDATE_CITIES } from "./citiesReducer";

export type InitialStateType = {
    cities: Array<CityType>
};

export type CityType = {
    name: string
    weather: number
};

export type ActionsType = AddCityType | UpdateCityType;

export type AddCityType = {
    type: typeof ADD_CITIES
    cityWeather: CityType
};

export type UpdateCityType = {
    type: typeof UPDATE_CITIES
    weather: number
    name: string
};

export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>;
export type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>;