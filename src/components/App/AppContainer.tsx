import React from "react";
import App from "./App";

export const AppContainer = () => {
    const dateBuilder = (d: any) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`;
    };

    const getTime = (timestamp: number) => {
        const date = new Date(timestamp * 1000);
        const hour = date.getHours();
        const minute = date.getMinutes();

        if (hour < 10 && minute < 10) {
            return `0${hour}:0${minute}`;
        } else if (hour < 10) {
            return `0${hour}:${minute}`;
        } else if (minute < 10) {
            return `${hour}:0${minute}`;
        }

        return `${date.getHours()}:${date.getMinutes()}`;
    };

    return (
        <App
            dateBuilder={dateBuilder}
            getTime={getTime}
        />
    );
};