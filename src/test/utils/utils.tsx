import { ReactElement } from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WeatherContext } from "../../context/WeatherContext";
import { useQuery } from '@tanstack/react-query'

interface withAllContextType {
  children: React.ReactNode,
  weather: any
}

export function withAllContext({ children, weather }: withAllContextType) {
  const testClient = createTestQueryClient();
  return <WeatherContext.Provider value={weather}>
  <QueryClientProvider client={testClient}>
    {children}
  </QueryClientProvider>
  </WeatherContext.Provider>
  
}

export function withQueryProvider({ children }: {children: ReactElement}) {
  const testClient = createTestQueryClient();
  return (<QueryClientProvider client={testClient}>
  {children}
</QueryClientProvider>)
  
}

function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      }
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    }
  });
}

export function useCustomHook() {
  return useQuery({ queryKey: ['customHook'], queryFn: () => 'Hello' });
}