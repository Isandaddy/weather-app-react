import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WeatherProvider } from './context/WeatherContext';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WeatherProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WeatherProvider>
  </React.StrictMode>
);

