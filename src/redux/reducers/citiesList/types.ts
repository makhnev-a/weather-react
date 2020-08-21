import {FILTER_TOWNS, GET_TOWNS, SET_QUERY} from "./citiesList.reducer";

export type CoordType = {
    "lon": number
    "lat": number
};

export type TownType = {
    "id": number
    "name": string
    "state": string,
    "country": string
    "coord": CoordType
};

export type InitialStateType = {
    towns: Array<TownType>
    query: string
};

// Actions types
export type ActionsType = GetTownsType | FilterTownsType | SetQueryType;

export type GetTownsType = {
    type: typeof GET_TOWNS
};

export type SetQueryType = {
    type: typeof SET_QUERY
    query: string
};

export type FilterTownsType = {
    type: typeof FILTER_TOWNS,
    name: string
};