export type WeatherType = {
    base: string
    clouds: WeatherCloudsType
    cod: number
    coord: WeatherCoordType
    dt: number
    id: number
    main: WeatherMainType
    name: string
    sys: WeatherSysType
    timezone: number
    visibility: number
    weather: Array<WeatherOneType>
    wind: WeatherWindType
};

type WeatherCloudsType = {
    all: number
};

type WeatherCoordType = {
    lon: number
    lat: number
};

type WeatherMainType = {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
};

type WeatherWindType = {
    speed: number
    deg: number
};

type WeatherSysType = {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
};

type WeatherOneType = {
    description: string
    icon: string
    id: number
    main: string
};