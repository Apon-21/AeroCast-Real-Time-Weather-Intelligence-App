import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>
          <div style={{fontWeight:700}}>AeroCast</div>
          <div style={{color:'var(--muted)',marginTop:6}}>Accurate weather. Fast UI.</div>
        </div>
        <div style={{textAlign:'right',color:'var(--muted)'}}>
          <div>© {new Date().getFullYear()} AeroCast</div>
          <div style={{marginTop:6}}>Privacy • Terms</div>
        </div>
      </div>
    </footer>
  );
};
