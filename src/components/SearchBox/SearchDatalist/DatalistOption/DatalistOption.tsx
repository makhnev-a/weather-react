import React from "react";

type PropsType = {
    addCityToList: (cityName: string) => void
    name: string
};

export const DatalistOption = ({addCityToList, name}: PropsType) => {
    return (
        <option
            value={name}
        />
    );
};