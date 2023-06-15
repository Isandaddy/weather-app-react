import { Snow } from '../utils/Snow';
import { Clear } from "../utils/Clear";
import { Cloud } from "../utils/Cloud";
import { Rain } from "../utils/Rain";

export interface WeatherData {
  weather: [{
    id: number;
    main: string;
    description: string;
    icon: string;
  }];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  name: string;
}

export　interface Weather {
  generateWeather: () => void;
}

export type WeatherUnion = Clear | Cloud | Rain | Snow;