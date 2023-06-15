import React, { useEffect, useRef } from 'react';
import { Cloud } from '../utils/Cloud';
import style from './Canvas1.module.css'
import { Clear } from '../utils/Clear';
import { WeatherUnion } from '../types/types';
import { Rain } from '../utils/Rain';
import { Snow } from '../utils/Snow';

interface Canvas1Props {
  weatherMain: string;
}

export default function Canvas1({ weatherMain }: Canvas1Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(()=> {
    const canvas = canvasRef.current;

    const instanceWeather= (): WeatherUnion | undefined => {
      switch (weatherMain) {
        case 'Clear':
          return new Clear(canvas as HTMLCanvasElement);
        case 'Clouds':
          return new Cloud(canvas as HTMLCanvasElement);
        case 'Rain':
          return new Rain(canvas as HTMLCanvasElement);
        case 'Snow':
          return new Snow(canvas as HTMLCanvasElement);
        // case 'Drizzle':
        //   console.log('Drizzle');
        //   return new Drizzle(canvas);
        // case 'Thunderstorm':
        //   console.log('Thunderstorm');
        //   const clouds = new Cloud(canvas);
        //   const rain = new Rain(canvas2);
        //   return new Thunder(canvas, clouds, rain);
        // case 'Atmosphere':
        //   console.log('Atmosphere');
        //   return new Atmosphere(canvas);
        default:
          console.log(`Sorry, we are out of ${weatherMain}.`);
          break;
      }
    }
    
    const screenAnimate = () => {
      let animationFrameId: number;
      const animate = () => {
        weatherCondition?.generateWeather();
        animationFrameId = window.requestAnimationFrame(animate);
      };
      animate();
  
      return () => {
        window.cancelAnimationFrame(animationFrameId);
      };
    }

    const weatherCondition = instanceWeather();
    // const weatherCondition = new Snow(canvas as HTMLCanvasElement);
    if (weatherCondition) {
      if(weatherCondition instanceof Rain || weatherCondition instanceof Snow) {
        screenAnimate();
      }
      weatherCondition.generateWeather();
    }
    
  }, [weatherMain])
  return <canvas className={style.canvas} ref={canvasRef} />
}

