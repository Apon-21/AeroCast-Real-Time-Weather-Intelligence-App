import React from 'react';
import { Header } from '../components/Header';
import { CurrentWeatherCard } from '../components/CurrentWeatherCard';
import { HourlyForecastSlider } from '../components/HourlyForecastSlider';
import { DailyForecastGrid } from '../components/DailyForecastGrid';
import { RadarMapSection } from '../components/RadarMapSection';
import { WeatherNewsCards } from '../components/WeatherNewsCards';
import { Footer } from '../components/Footer';
import useWeather from '../hooks/useWeather';

export default function Home() {
  const [city, setCity] = React.useState('Dhaka');
  const { data, error, isLoading } = useWeather(city);

  return (
    <div>
      <Header onSearch={(q)=>setCity(q)} />
      <main className="container">
        <section className="hero" aria-label="Hero">
          <CurrentWeatherCard loc={data?.loc} current={data?.forecast?.current_weather} />
          <div style={{flex:1}}>
            <div style={{background:'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))',padding:20,borderRadius:12}}>
              <h3 style={{margin:0}}>Quick Info</h3>
              <p style={{color:'var(--muted)'}}>Search a city to see current and forecast data. Powered by Open-Meteo.</p>
              <div style={{marginTop:12}}>
                <strong style={{color:'var(--muted)'}}>Status:</strong> {isLoading ? 'Loading...' : error ? 'Error' : 'Ready'}
              </div>
            </div>

            <div style={{marginTop:18}}>
              <HourlyForecastSlider hourly={data?.forecast?.hourly} />
              <DailyForecastGrid daily={data?.forecast?.daily} />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <RadarMapSection />
          </div>
        </section>

        <WeatherNewsCards news={[]} />
      </main>

      <Footer />
    </div>
  );
}
