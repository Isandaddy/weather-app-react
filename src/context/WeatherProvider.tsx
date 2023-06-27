import WeatherApi from "../api/weatherApi";
import { WeatherContext } from "./WeatherContext";

const weatherApi = new WeatherApi();

export function WeatherProvider({children}: { children: React.ReactNode }) {
  return (
      <WeatherContext.Provider value={{ weatherApi }}>
        {children}
      </WeatherContext.Provider>
    );
}