import {api} from "../../../api/api";
import {
    ActionsType,
    AddCityType,
    CityType,
    InitialStateType,
    ThunkDispatchType,
    ThunkType,
    UpdateCityType
} from "./types";

const initialState: InitialStateType = {
    cities: []
};

export const ADD_CITIES = 'Reducers/CitiesReducer/ADD_CITIES';
export const UPDATE_CITIES = 'Reducers/CitiesReducer/UPDATE_CITIES';

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
export const addCityAc = (cityWeather: CityType): AddCityType => ({
    type: ADD_CITIES,
    cityWeather
});

export const updateCityAc = (name: string, weather: number): UpdateCityType => ({
    type: UPDATE_CITIES,
    weather,
    name
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