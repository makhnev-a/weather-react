import React, {ChangeEvent, KeyboardEvent} from "react";
import {TownType} from "../../redux/reducers/citiesList/types";
import {SearchDatalist} from "./SearchDatalist/SearchDatalist";
import {SearchInput} from "./SearchInput/SearchInput";

type PropsType = {
    inputChange: (e: ChangeEvent<HTMLInputElement>) => void
    inputKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void
    inputValue: string
    towns: Array<TownType>
};

export const SearchBox = ({inputChange, inputKeyPress, inputValue, towns}: PropsType) => {
    return (
        <>
            <SearchInput
                inputChange={inputChange}
                inputKeyPress={inputKeyPress}
                inputValue={inputValue}
            />
            <SearchDatalist towns={towns} />
        </>
    );
};