import React from "react";
import {TownType} from "../../../redux/reducers/citiesList/types";

type PropsType = {
    towns: Array<TownType>
};

export const SearchDatalist = ({towns}: PropsType) => {
    return (
        <>
            <datalist id="towns">
                {towns.map((town: TownType) => <option value={town.name}/>)}
            </datalist>
        </>
    );
};