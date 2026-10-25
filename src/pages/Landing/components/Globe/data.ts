import type { GlobeCity, GlobeConnection } from "./utils/geo";

export const DEFAULT_CITIES: readonly GlobeCity[] = [
  { id: "san-francisco", name: "San Francisco", lat: 37.7749, lon: -122.4194 },
  { id: "new-york", name: "Nueva York", lat: 40.7128, lon: -74.006 },
  { id: "london", name: "Londres", lat: 51.5074, lon: -0.1278 },
  { id: "sao-paulo", name: "São Paulo", lat: -23.5505, lon: -46.6333 },
  { id: "dublin", name: "Dublín", lat: 53.3498, lon: -6.2603 },
  { id: "singapore", name: "Singapur", lat: 1.3521, lon: 103.8198 },
  { id: "tokyo", name: "Tokio", lat: 35.6762, lon: 139.6503 },
  { id: "sydney", name: "Sídney", lat: -33.8688, lon: 151.2093 },
  { id: "toronto", name: "Toronto", lat: 43.6532, lon: -79.3832 },
  { id: "mexico-city", name: "Ciudad de México", lat: 19.4326, lon: -99.1332 },
];

export const DEFAULT_CONNECTIONS: readonly GlobeConnection[] = [
  { from: "san-francisco", to: "new-york" },
  { from: "new-york", to: "london" },
  { from: "london", to: "singapore" },
  { from: "singapore", to: "tokyo" },
  { from: "tokyo", to: "sydney" },
  { from: "sydney", to: "san-francisco" },
  { from: "dublin", to: "toronto" },
  { from: "toronto", to: "mexico-city" },
  { from: "mexico-city", to: "sao-paulo" },
  { from: "sao-paulo", to: "dublin" },
];
