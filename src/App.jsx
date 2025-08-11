import "./App.css";
import Header from "./assets/components/header/Header";
import Weather from "./assets/components/weather/Weather";
import WeatherProvider from "./provider/weatherProvider";

function App() {
  return (
    <WeatherProvider>
      <div className=" grid place-items-center h-screen">
        <Header></Header>
        <Weather></Weather>
      </div>
    </WeatherProvider>
  );
}

export default App;
