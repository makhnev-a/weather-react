import { AppStateType } from "../store";
import { ThunkDispatch, ThunkAction } from "redux-thunk";
import {api} from "../../api/api";

export type InitialStateType = {
    cities: Array<CityType>
};

export type CityType = {
    name: string
    weather: number
};

const initialState: InitialStateType = {
    cities: []
};

const ADD_CITIES = 'Reducers/CitiesReducer/ADD_CITIES';
const UPDATE_CITIES = 'Reducers/CitiesReducer/UPDATE_CITIES';

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
        default:
            return state;
    }
};

// Actions
type ActionsType = AddCityType | UpdateCityType;

type AddCityType = {
    type: typeof ADD_CITIES
    cityWeather: CityType
};

const addCityAc = (cityWeather: CityType): AddCityType => ({
    type: ADD_CITIES,
    cityWeather
});

type UpdateCityType = {
    type: typeof UPDATE_CITIES
    weather: number
    name: string
};

const updateCityAc = (name: string, weather: number): UpdateCityType => ({
    type: UPDATE_CITIES,
    weather,
    name
});

// Thunks
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>;
type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>;

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