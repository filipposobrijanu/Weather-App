import { useState, useEffect } from "react";
import Sunny from "../assets/Sunny.png";
import PartlyCloudy from "../assets/PartlyCloudy.png";
import Snowy from "../assets/Snowy.png";
import Rainy from "../assets/Rainy.png";
import RainThunder from "../assets/RainThunder.png";
import Wind from "../assets/Wind.png";
import Humidity from "../assets/Humidity.png";
import Pressure from "../assets/Pressure.png";

export default function Weather({ data }) {
  const [localTime, setLocalTime] = useState("");
  const [weatherIcon, setWeatherIcon] = useState(null);

  useEffect(() => {
    const weatherId = data.weather[0].id;

    if (data.weather[0].id === 800) {
      setWeatherIcon(Sunny);
    } else if (weatherId >= 801 && weatherId <= 804) {
      setWeatherIcon(PartlyCloudy);
    } else if (weatherId >= 600 && weatherId <= 622) {
      setWeatherIcon(Snowy);
    } else if (weatherId >= 500 && weatherId <= 531) {
      setWeatherIcon(Rainy);
    } else if (weatherId >= 200 && weatherId <= 232) {
      setWeatherIcon(RainThunder);
    } else {
      setWeatherIcon(
        `https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`
      );
    }
  }, [data]);

  useEffect(() => {
    if (data?.coord) {
      const fetchLocalTime = async () => {
        try {
          const response = await fetch(
            `https://api.timezonedb.com/v2.1/get-time-zone?key=W5GIWIEFBA8E&format=json&by=position&lat=${data.coord.lat}&lng=${data.coord.lon}`
          );
          const timeData = await response.json();
          setLocalTime(new Date(timeData.formatted).toLocaleString());
        } catch (err) {
          console.error("Failed to fetch time:", err);
        }
      };
      fetchLocalTime();
    }
  }, [data?.coord]);

  return (
    <div
      id="card-of-weather"
      className="container p-3 w-75 d-flex align-items-center text-center text-white card card-body rounded-5 shadow w-100"
    >
      <h2>
        <b className="fs-3 fs-md-2">{data?.name}</b>,{" "}
        <small className="fs-5 fs-md-4">{data?.sys?.country}</small>
      </h2>

      {localTime && (
        <p className=" text-white-50">
          <b>{localTime}</b>
        </p>
      )}

      {weatherIcon && (
        <img
          className="w-25 w-md-25 img-fluid"
          src={weatherIcon}
          alt={data?.weather?.[0]?.description || "Weather icon"}
        />
      )}

      <p className="mt-2">
        <b className="fs-5 fs-md-4">{Math.round(data?.main?.temp)}°</b>
        <span className="fs-6 fs-md-5"> C</span>
      </p>
      <p className="text-capitalize text-white-50">
        {data?.weather?.[0]?.description}
      </p>
      <div className="container">
        <div className="row justify-content-center g-4">
          <div className="col-auto">
            <img className="w-25 w-md-25 img-fluid" src={Wind} />
            <p className="mt-2">
              <b className="fs-6 fs-md-5">{data?.wind.speed} </b>km/h
            </p>
          </div>
          <div className="col-auto">
            <img className="w-25 w-md-25 img-fluid" src={Humidity} />
            <p className="mt-2">
              <b className="fs-6 fs-md-5">{data?.main.humidity} </b>%
            </p>
          </div>
          <div className="col-auto">
            <img className="w-25 w-md-25 img-fluid" src={Pressure} />
            <p className="mt-2">
              <b className="fs-6 fs-md-5">{data?.main.pressure} </b>hPa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
