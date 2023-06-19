import React from 'react';
import 'jest-canvas-mock';
import { render, renderHook, waitFor, screen } from '@testing-library/react';
import App from '../App';
import { WeatherProvider } from '../context/WeatherContext';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

describe('App', () => {
  const queryClient = new QueryClient();

  it('render app', async ()=> {
    render(
    <WeatherProvider>
      <QueryClientProvider client={queryClient}>
        <App/>
      </QueryClientProvider>
    </WeatherProvider>);
    // screen.debug();

    expect(screen.getByText('Loading....')).toBeInTheDocument();
    // await waitFor(()=>{
    //   expect(screen.getByText('Sapporo')).toBeInTheDocument();
    // });
    screen.debug();
  });
});
