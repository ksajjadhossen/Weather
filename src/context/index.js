import { createContext } from "react";

const WeatherContext = createContext({
  weatherData: {},
  error: null,
  loading: { state: false, message: "" },
});

export { WeatherContext };
