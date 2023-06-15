import { createContext, useContext } from "react";
import WeatherApi from "../api/weatherApi";

interface WeatherContextType {
  weatherApi: WeatherApi
}

export const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export function WeatherProvider({children}: { children: React.ReactNode }) {
  const weatherApi = new WeatherApi();
  return (
      <WeatherContext.Provider value={{ weatherApi }}>
        {children}
      </WeatherContext.Provider>
    );
}

export function useWeatherApi(): WeatherContextType {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('weatherApi must be used within a weatherApiProvider');
  }
  return context;
}