import React, {ChangeEvent, KeyboardEvent} from "react";
import {ButtonList} from "../ButtonList/ButtonList";

type PropsType = {
    inputChange: (e: ChangeEvent<HTMLInputElement>) => void
    inputKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void
    inputValue: string
    showDropdown: () => void
    onBtnSearchClick: () => void
};

export const SearchInput = ({inputChange, inputKeyPress, inputValue, showDropdown, onBtnSearchClick}: PropsType) => {
    return (
        <div style={{position: "relative"}}>
            <input
                type="text"
                className={'search-bar'}
                placeholder={'Search...'}
                onChange={inputChange}
                onKeyPress={inputKeyPress}
                value={inputValue}
                list={'towns'}
                onFocus={() => showDropdown()}
            />
            <ButtonList onBtnSearchClick={onBtnSearchClick}/>
        </div>
    );
};