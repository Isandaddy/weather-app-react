import { WeatherData } from "../types/types";
import Canvas1 from "./Canvas1";
import Sapporo from "./Sapporo";
import style from './Main.module.css'

export default function Main({name, weather}: WeatherData) {
  return (
    <main className={style.main}>
      <Canvas1 weatherMain={weather[0].main} />
      <section className={style.desc}>
        <h1 className={style.city}>{name}</h1>
        <h3 className={style.weather_status}>{weather[0].main}</h3>
      </section>
      <Sapporo/>
    </main>
  );
}

