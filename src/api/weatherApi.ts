import axios from "axios";


export default class WeatherApi {
  private httpClient;
  constructor(){
    this.httpClient = axios.create();
  }

  public async fetchData() {
    const baseUrl = 'https://api.openweathermap.org/data/2.5';
    return this.httpClient.get(`${baseUrl}/weather?q=sapporo&appid=${process.env.REACT_APP_WEATHER_API_KEY}`).then((response) => response.data)
  };
}

// export async function fetchData(): Promise<WeatherData> {
//   const baseUrl = 'https://api.openweathermap.org/data/2.5';
//   return axios.get(`${baseUrl}/weather?lat=43.061936&lon=141.3542924&appid=${process.env.REACT_APP_WEATHER_API_KEY}`).then((response) => response.data)
// } 