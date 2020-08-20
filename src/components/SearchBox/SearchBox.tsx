import React, {ChangeEvent, KeyboardEvent} from "react";
import {TownType} from "../../redux/reducers/citiesList/types";
import {SearchDatalist} from "./SearchDatalist/SearchDatalist";
import {SearchInput} from "./SearchInput/SearchInput";

type PropsType = {
    inputChange: (e: ChangeEvent<HTMLInputElement>) => void
    inputKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void
    inputValue: string
    towns: Array<TownType>
    addCityToList: (cityName: string) => void
    showDropdown: () => void
    hideDropdown: () => void
    dropdown: boolean
    onBtnSearchClick: () => void
};

export const SearchBox = ({inputChange, inputKeyPress, inputValue, towns, addCityToList, showDropdown, hideDropdown, dropdown, onBtnSearchClick}: PropsType) => {
    return (
        <>
            <SearchInput
                inputChange={inputChange}
                inputKeyPress={inputKeyPress}
                inputValue={inputValue}
                showDropdown={showDropdown}
                onBtnSearchClick={onBtnSearchClick}
            />
            <SearchDatalist
                dropdown={dropdown}
                hideDropdown={hideDropdown}
                towns={towns}
                addCityToList={addCityToList}
            />
        </>
    );
};