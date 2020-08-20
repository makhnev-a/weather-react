import React from "react";
import {TownType} from "../../../redux/reducers/citiesList/types";
import {DatalistOption} from "./DatalistOption/DatalistOption";

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
                        {towns.map((town: TownType) =>
                            <DatalistOption
                                addCityToList={addCityToList}
                                name={town.name}
                            />
                        )}
                    </div>
                </div>
            )}
            {/*<datalist id="towns">*/}
            {/*    {towns.map((town: TownType) => <DatalistOption addCityToList={addCityToList} name={town.name} />)}*/}
            {/*</datalist>*/}
        </>
    );
};