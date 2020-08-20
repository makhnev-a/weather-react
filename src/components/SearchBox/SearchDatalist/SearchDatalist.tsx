import React from "react";
import {TownType} from "../../../redux/reducers/citiesList/types";

type PropsType = {
    towns: Array<TownType>
    addCityToList: (cityName: string) => void
    dropdown: boolean
    hideDropdown: () => void
};

export const SearchDatalist = ({towns, dropdown, addCityToList, hideDropdown}: PropsType) => {
    return (
        <>
            {dropdown && (
                <div className='search-dropdown'>
                    <span
                        className='search-dropdown-close'
                        onClick={hideDropdown}
                    >x</span>
                    <div>
                        <div>test 1</div>
                        <div>test 2</div>
                        <div>test 3</div>
                        <div>test 4</div>
                        <div>test 5</div>
                        <div>test 6</div>
                        <div>test 7</div>
                        <div>test 8</div>
                    </div>
                </div>
            )}
            {/*<datalist id="towns">*/}
            {/*    {towns.map((town: TownType) => <DatalistOption addCityToList={addCityToList} name={town.name} />)}*/}
            {/*</datalist>*/}
        </>
    );
};