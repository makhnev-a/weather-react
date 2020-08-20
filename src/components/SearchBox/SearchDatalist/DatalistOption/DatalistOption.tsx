import React from "react";

type PropsType = {
    addCityToList: (cityName: string) => void
    name: string
};

export const DatalistOption = ({addCityToList, name}: PropsType) => {
    const onCityClick = () => addCityToList(name);

    return (
        <div onClick={onCityClick}>{name}</div>
    );
};