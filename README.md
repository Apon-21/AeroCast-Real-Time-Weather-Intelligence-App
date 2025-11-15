# AeroCast — Weather app starter (Next.js + TypeScript)

This starter project builds a premium weather UI using Open-Meteo (no API key required).
It includes:
- City search (geocoding)
- Current weather, hourly slider, daily grid
- Radar placeholder and news cards
- Clean folder structure and simple styling

How to run:
1. Install deps: `npm install`
2. Run dev server: `npm run dev`
3. Open http://localhost:3000

API:
- Uses Open-Meteo geocoding and forecast endpoints.
- No API key required.

Files:
- /components — reusable UI pieces
- /lib/api.ts — Open-Meteo wrapper
- /hooks/useWeather.ts — data hook
- /pages — Next.js pages
- /styles/globals.css — basic styling
