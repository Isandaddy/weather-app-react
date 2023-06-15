import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { WeatherProvider } from './context/WeatherContext';
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

// 테스트 목록 
// useQuery의 isLoading이 참 일때 로딩되는 지
// 에러일떼 에러 표시 하는지