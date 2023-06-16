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
  name: string;
}

export　interface Weather {
  generateWeather: () => void;
}

export type WeatherUnion = Clear | Cloud | Rain | Snow;