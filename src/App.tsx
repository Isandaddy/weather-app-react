import './App.css';
import { useQuery } from '@tanstack/react-query'
import { useWeatherApi } from './context/WeatherContext';
import Main from './components/Main';
import Sapporo from './components/Sapporo';


function App() {
  const { weatherApi } = useWeatherApi();
  const { isLoading, error, data: weathers } = useQuery(['weathers'], () => weatherApi.fetchData(), {staleTime: 6000 * 10});
  
  if(isLoading) return <p>Loading....</p>;
  if(error) return <p>error....</p>;

  return (
    <>
      <Main {...weathers} />
    </>
  );
}

export default App;
