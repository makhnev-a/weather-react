import React from "react";

type PropsType = {
    addCityToList: (cityName: string) => void
    name: string
};

export const DatalistOption = ({addCityToList, name}: PropsType) => {
    return (
        <div onClick={() => addCityToList(name)}>{name}</div>
    );
};