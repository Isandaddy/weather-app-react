import { createContext, useContext } from "react";
import WeatherApi from "../api/weatherApi";

interface WeatherContextType<T> {
  weatherApi: T
}

export const WeatherContext = createContext<WeatherContextType<WeatherApi> | undefined>(undefined);

export function useWeatherApi(): WeatherContextType<WeatherApi> {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('weatherApi must be used within a weatherApiProvider');
  }
  return context;
}