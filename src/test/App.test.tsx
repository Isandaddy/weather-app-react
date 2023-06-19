import React from 'react';
import { render, renderHook, waitFor } from '@testing-library/react';
import App from '../App';
import { WeatherProvider } from '../context/WeatherContext';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

describe('App', () => {
  const queryClient = new QueryClient();

  it('render app', async ()=> {
    const {getByText} = render(
    <WeatherProvider>
      <QueryClientProvider client={queryClient}>
        <App/>
      </QueryClientProvider>
    </WeatherProvider>);

    await waitFor(() => {
      const dataElement = getByText('Sapporo');
      expect(dataElement).toBeInTheDocument();
    });
  });

});
