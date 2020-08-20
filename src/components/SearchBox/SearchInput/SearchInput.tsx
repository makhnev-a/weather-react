import React, {ChangeEvent, KeyboardEvent, Props} from "react";

type PropsType = {
    inputChange: (e: ChangeEvent<HTMLInputElement>) => void
    inputKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void
    inputValue: string
};

export const SearchInput = ({inputChange, inputKeyPress, inputValue}: PropsType) => {
    return (
        <input
            type="text"
            className={'search-bar'}
            placeholder={'Search...'}
            onChange={inputChange}
            onKeyPress={inputKeyPress}
            value={inputValue}
            list={'towns'}
        />
    );
};