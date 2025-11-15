export type GeoResult = {
  name: string;
  latitude: number;
  longitude: number;
  country?: string;
  admin1?: string;
};

export type ForecastResult = {
  latitude:number;
  longitude:number;
  timezone:string;
  current_weather?: any;
  hourly?: any;
  daily?: any;
};

export async function geocode(city:string): Promise<GeoResult | null> {
  const q = encodeURIComponent(city);
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${q}&count=5&language=en&format=json`;
  const res = await fetch(url);
  if(!res.ok) return null;
  const data = await res.json();
  if(!data.results || data.results.length === 0) return null;
  const r = data.results[0];
  return {
    name: r.name,
    latitude: r.latitude,
    longitude: r.longitude,
    country: r.country,
    admin1: r.admin1
  };
}

export async function fetchForecast(lat:number, lon:number): Promise<ForecastResult> {
  // Open-Meteo One-call style: current, hourly, daily
  const params = [
    'current_weather=true',
    'hourly=temperature_2m,relativehumidity_2m,precipitation,weathercode,windspeed_10m,winddirection_10m',
    'daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset',
    'timezone=auto'
  ].join('&');
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&${params}`;
  const res = await fetch(url);
  if(!res.ok) throw new Error('Failed to fetch forecast');
  const data = await res.json();
  return data;
}
