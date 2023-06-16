import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from '../../components/Main';
import { WeatherData } from '../../types/types';

// Mocked data
const mockWeatherData: WeatherData = {
  name: 'City',
  weather: 
  [
    {
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04d"
    }
  ]
};

describe('Main', () => {
  it('render main', ()=> {
    render(<Main {...mockWeatherData}/>);
    expect(screen.getByText('City')).toBeInTheDocument();
    expect(screen.getByText('Clouds')).toBeInTheDocument();
    });
  }
)