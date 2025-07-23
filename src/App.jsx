import "./App.css";
import Header from "./assets/components/header/Header";
import Weather from "./assets/components/weather/Weather";

function App() {
  return (
    <div className=" grid place-items-center h-screen">
      <Header></Header>
      <Weather></Weather>
    </div>
  );
}

export default App;
