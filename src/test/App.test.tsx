import 'jest-canvas-mock';
import { renderHook, waitFor } from '@testing-library/react';
import App from '../App';
import { useCustomHook, withQueryProvider } from './utils/utils';

describe('App', () => {
  const mockWeather = {
    fetchData: jest.fn(),
  };
  afterEach(() => {
    mockWeather.fetchData.mockReset();
  });
  it('app render', async () => {
    mockWeather.fetchData.mockImplementation(() => {
      return {
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
    })
    // const wrapper = withAllContext({ children: <App />, weather: mockWeather });
    // render(withAllContext({ children: <App />, weather: mockWeather }));
    
    const wrapper = withQueryProvider({ children: <App /> })

    const { result } = renderHook(() => useCustomHook(), { wrapper: withQueryProvider });
    await waitFor(() => expect(result.current.isLoading).toBe(true));
  })
});
