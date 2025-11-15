import React from 'react';

export const RadarMapSection: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h3>Weather Radar</h3>
        <div style={{marginTop:12, background:'linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.02))', borderRadius:12, padding:18}}>
          <p style={{color:'var(--muted)'}}>Radar placeholder. Integrate Map layers (Leaflet/OpenLayers) or paid radar tiles later.</p>
          <img src="/radar-placeholder.png" alt="Radar placeholder" style={{width:'100%',borderRadius:8,marginTop:12}} />
        </div>
      </div>
    </section>
  );
};
