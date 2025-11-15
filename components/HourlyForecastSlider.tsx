import React from 'react';

export const HourlyForecastSlider: React.FC<{hourly:any}> = ({ hourly }) => {
  if(!hourly) return null;
  const times = hourly.time || [];
  const temps = hourly.temperature_2m || [];
  return (
    <div style={{marginTop:12}}>
      <h3>Hourly</h3>
      <div className="hourly-slider" role="list">
        {times.slice(0,24).map((t:string,i:number)=>(
          <div className="hour-card" key={t} role="listitem">
            <div style={{fontSize:12,color:'var(--muted)'}}>{new Date(t).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}</div>
            <div style={{fontWeight:700,fontSize:18}}>{Math.round(temps[i])}°C</div>
          </div>
        ))}
      </div>
    </div>
  );
};
