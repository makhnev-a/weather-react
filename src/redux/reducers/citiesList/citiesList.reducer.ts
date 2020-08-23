import {ActionsType, FilterTownsType, GetTownsType, InitialStateType} from './types.js';

const initialState: InitialStateType = {
    towns: [
        {
            "id": 524901,
            "name": "Moscow",
            "state": "",
            "country": "RU",
            "coord": {
                "lon": 37.615555,
                "lat": 55.75222
            }
        },
        {
            "id": 536203,
            "name": "Saint Petersburg",
            "state": "",
            "country": "RU",
            "coord": {
                "lon": 30.25,
                "lat": 59.916668
            }
        },
        {
            "id": 1694631,
            "name": "Pasacao",
            "state": "",
            "country": "PH",
            "coord": {
                "lon": 123.042603,
                "lat": 13.5118
            }
        },
        {
            "id": 1694660,
            "name": "Parista",
            "state": "",
            "country": "PH",
            "coord": {
                "lon": 120.9282,
                "lat": 15.8536
            }
        },
        {
            "id": 2968815,
            "name": "Paris",
            "state": "",
            "country": "FR",
            "coord": {
                "lon": 2.3486,
                "lat": 48.853401
            }
        },
        {
            "id": 2867714,
            "name": "Munich",
            "state": "",
            "country": "DE",
            "coord": {
                "lon": 11.57549,
                "lat": 48.137428
            }
        },
        {
            "id": 5173962,
            "name": "Tiltonsville",
            "state": "OH",
            "country": "US",
            "coord": {
                "lon": -80.699799,
                "lat": 40.16674
            }
        },
        {
            "id": 5174035,
            "name": "Toledo",
            "state": "OH",
            "country": "US",
            "coord": {
                "lon": -83.555206,
                "lat": 41.66394
            }
        },
        {
            "id": 5174095,
            "name": "Toronto",
            "state": "OH",
            "country": "US",
            "coord": {
                "lon": -80.600906,
                "lat": 40.46423
            }
        }
    ],
    query: ''
};

export const citiesListReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case GET_TOWNS:
            return {...state};
        case SET_QUERY:
            return {...state, query: action.query};
        default:
            return state;
    }
};

export const GET_TOWNS = 'Reducers/CitiesListReducer/GET_TOWNS';
export const FILTER_TOWNS = 'Reducers/CitiesListReducer/FILTER_TOWNS';
export const SET_QUERY = 'Reducers/CitiesListReducer/SET_QUERY';

// Actions
export const getTownsAc = (): GetTownsType => ({
    type: GET_TOWNS
});

export const setQueryAc = (query: string) => ({
    type: SET_QUERY,
    query
});

export const filterTownsAc = (name: string): FilterTownsType => ({
    type: FILTER_TOWNS,
    name
});