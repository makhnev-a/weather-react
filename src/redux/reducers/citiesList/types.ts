import {FILTER_TOWNS, GET_TOWNS} from "./citiesList.reducer";

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
};

// Actions types
export type ActionsType = GetTownsType | FilterTownsType;

export type GetTownsType = {
    type: typeof GET_TOWNS
};

export type FilterTownsType = {
    type: typeof FILTER_TOWNS,
    name: string
};