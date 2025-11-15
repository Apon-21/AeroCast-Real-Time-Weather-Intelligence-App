import React from 'react';

export const WeatherNewsCards: React.FC<{news?:any[]}> = ({ news=[] }) => {
  return (
    <section className="section">
      <div className="container">
        <h3>Weather News</h3>
        <div style={{marginTop:12}}>
          {news.length === 0 ? (
            <div style={{color:'var(--muted)'}}>No news available. This area can show curated weather articles or alerts.</div>
          ) : news.map((n,i)=>(
            <div key={i} style={{background:'var(--card)',padding:12,borderRadius:10,marginTop:10}}>
              <h4 style={{margin:0}}>{n.title}</h4>
              <p style={{margin:0,color:'var(--muted)'}}>{n.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
