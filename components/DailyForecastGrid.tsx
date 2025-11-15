import React from 'react';

export const DailyForecastGrid: React.FC<{daily:any}> = ({ daily }) => {
  if(!daily) return null;
  const dates = daily.time || [];
  const tmax = daily.temperature_2m_max || [];
  const tmin = daily.temperature_2m_min || [];
  return (
    <div style={{marginTop:18}}>
      <h3>7-Day Forecast</h3>
      <div className="daily-grid">
        {dates.map((d:string,i:number)=>(
          <div className="day-card" key={d}>
            <div style={{fontWeight:700}}>{new Date(d).toLocaleDateString(undefined, {weekday:'short'})}</div>
            <div style={{marginTop:6}}>{Math.round(tmax[i])}° / {Math.round(tmin[i])}°C</div>
          </div>
        ))}
      </div>
    </div>
  );
};
