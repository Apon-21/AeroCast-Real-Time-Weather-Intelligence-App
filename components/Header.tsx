import React from 'react';

export const Header: React.FC<{onSearch?: (q:string)=>void}> = ({ onSearch }) => {
  const [q, setQ] = React.useState('New York');

  const submit = (e?:React.FormEvent) => {
    e?.preventDefault();
    if(onSearch) onSearch(q);
  };

  return (
    <header className="header container" role="banner">
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <div className="logo">AeroCast</div>
      </div>
      <form onSubmit={submit} style={{display:'flex',gap:12,alignItems:'center'}}>
        <input
          aria-label="Search city"
          className="search-bar"
          value={q}
          onChange={(e)=>setQ(e.target.value)}
          placeholder="Search city, e.g. Dhaka"
        />
        <button className="cta" onClick={submit} type="submit">Search</button>
      </form>
    </header>
  );
};
