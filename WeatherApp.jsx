import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp() {
    const [weatherInfo , setWeatherInfo]=useState({
            city:"surat",
            feels_like: 33.54,
            humidity: 89,
            temp: 27.99,
            tempMax: 27.99,
            tempMin: 27.99,
            weather:"overcast clouds",
    });

    let updateInfo = (newInfo) =>{
         setWeatherInfo(newInfo);
    }
    return (
    <div style={{textAlign:"center"}}>
        <h2>Weather App by Sanket</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
        );
}