import CloudSvg from "../../../assets/icons/cloud.svg";
import PinSvg from "../../../assets/pin.svg";
import { useContext } from "react";
import { WeatherContext } from "../../../context";
import getFormattedDate from "../../../utils/Date-utils";

import CloudIcon from "../../cloud.svg";
import HazeIcon from "../../cloud.svg";
import SnowIcon from "../../cloud.svg";
import SunnyIcon from "../../cloud.svg";
import RainIcon from "../../cloud.svg";
import ThunderIcon from "../../cloud.svg";

export default function WeatherHeadline() {
  const { weatherData } = useContext(WeatherContext);
  const { climate, location, temperature, time } = weatherData;

  function getWeatherIcon(climate) {
    switch (climate) {
      case "Rain":
        RainIcon;
        return RainIcon;

      case "Cloud":
        CloudIcon;
        return CloudIcon;

      case "Clear":
        SunnyIcon;
        return SunnyIcon;

      case "Thunder":
        ThunderIcon;
        return ThunderIcon;

      case "Fog":
        SnowIcon;
        return SnowIcon;

      case "Haze":
        HazeIcon;
        return HazeIcon;

      case "Mist":
        HazeIcon;
        return HazeIcon;

      default:
        return SunnyIcon;
    }
  }
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt="climate" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={PinSvg} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormattedDate(time, "time")} - {getFormattedDate(time, "date")}
      </p>
    </div>
  );
}
