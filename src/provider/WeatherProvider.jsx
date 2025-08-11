import { Children } from "react";
// eslint-disable-next-line no-unused-vars
import { WeatherContext } from "../context";
import useWeather from "../hooks/useWeather";

const WeatherProvider = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { weatherData, error, loading } = useWeather();
  return (
    <WeatherContext.Provider value={{ weatherData, error, loading }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
