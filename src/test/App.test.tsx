import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { WeatherProvider } from '../context/WeatherContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

describe('App', () => {
const queryClient = new QueryClient();
  it('render app', ()=> {
    render(
    <WeatherProvider>
      <QueryClientProvider client={queryClient}>
        <App/>
      </QueryClientProvider>
    </WeatherProvider>)
  });
});
