import useSWR from 'swr';
import { geocode, fetchForecast } from '../lib/api';

export default function useWeather(city?: string) {
  const key = city ? `weather:${city}` : null;

  const fetcher = async () => {
    if(!city) return null;
    const loc = await geocode(city);
    if(!loc) throw new Error('Location not found');
    const forecast = await fetchForecast(loc.latitude, loc.longitude);
    return { loc, forecast };
  };

  const { data, error, isLoading } = useSWR(key, fetcher, { revalidateOnFocus: false });

  return { data, error, isLoading };
}
