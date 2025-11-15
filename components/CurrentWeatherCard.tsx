import React from 'react';

export const CurrentWeatherCard: React.FC<{loc:any, current:any}> = ({ loc, current }) => {
  if(!loc || !current) return <div className='hero-card'>No data</div>;
  return (
    <div className="hero-card" role="article" aria-label="Current weather">
      <div>
        <h2 className="city">{loc.name}, {loc.country ?? ''}</h2>
        <div className="temp">{Math.round(current.temperature)}°C</div>
        <div className="condition">Wind {current.windspeed} km/h • Wind Dir {current.winddirection}°</div>
        <div className="details" style={{marginTop:12}}>
          <div>Time: {current.time}</div>
        </div>
      </div>
    </div>
  );
};
