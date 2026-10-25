import { CatmullRomCurve3, MathUtils, Vector3 } from "three";

export interface GlobeCity {
  id: string;
  name: string;
  lat: number;
  lon: number;
}

export interface GlobeConnection {
  from: string;
  to: string;
}

export interface GeoPoint {
  lat: number;
  lon: number;
}

export function latLonToVector3(lat: number, lon: number, radius = 1) {
  const phi = MathUtils.degToRad(lat);
  const theta = MathUtils.degToRad(lon);
  return new Vector3(
    radius * Math.cos(phi) * Math.cos(theta),
    radius * Math.sin(phi),
    -radius * Math.cos(phi) * Math.sin(theta),
  );
}

// UV de una imagen equirectangular: norte arriba y Greenwich en el centro.
export function latLonToUV(lat: number, lon: number) {
  return {
    u: (((lon + 180) / 360) % 1 + 1) % 1,
    v: MathUtils.clamp((90 - lat) / 180, 0, 1),
  };
}

export function fibonacciSphere(count: number): GeoPoint[] {
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  return Array.from({ length: count }, (_, index) => ({
    lat: MathUtils.radToDeg(Math.asin(1 - (2 * (index + 0.5)) / count)),
    lon: MathUtils.radToDeg((index * goldenAngle) % (2 * Math.PI)) - 180,
  }));
}

export function isLand(mask: ImageData, lat: number, lon: number) {
  const { u, v } = latLonToUV(lat, lon);
  const x = Math.min(mask.width - 1, Math.floor(u * mask.width));
  const y = Math.min(mask.height - 1, Math.floor(v * mask.height));
  const offset = (y * mask.width + x) * 4;
  return mask.data[offset] > 127 && mask.data[offset + 3] > 127;
}

export function createConnectionCurve(from: GeoPoint, to: GeoPoint) {
  const start = latLonToVector3(from.lat, from.lon, 1.018);
  const end = latLonToVector3(to.lat, to.lon, 1.018);
  const angle = start.angleTo(end);
  const axis = new Vector3().crossVectors(start, end);

  // Para extremos antipodales elegimos un plano estable, sin normalizar cero.
  if (axis.lengthSq() < 1e-20) {
    axis.crossVectors(start, new Vector3(0, 1, 0));
    if (axis.lengthSq() < 1e-8) {
      axis.crossVectors(start, new Vector3(1, 0, 0));
    }
  }

  // Una sola Bezier puede atravesar la esfera en rutas casi antipodales.
  // Elevamos muestras del circulo maximo y las unimos con CatmullRom.
  const height = 0.12 + angle * 0.22;
  axis.normalize();
  const direction = start.clone().normalize();
  const points = Array.from({ length: 49 }, (_, index) => {
    const t = index / 48;
    return direction.clone().applyAxisAngle(axis, angle * t)
      .multiplyScalar(1.018 + height * Math.sin(Math.PI * t));
  });
  return new CatmullRomCurve3(points);
}

export function validateGlobeData(
  cities: readonly GlobeCity[],
  connections: readonly GlobeConnection[],
) {
  const ids = new Set<string>();
  for (const city of cities) {
    if (
      !city.id.trim() ||
      ids.has(city.id) ||
      !Number.isFinite(city.lat) ||
      !Number.isFinite(city.lon) ||
      Math.abs(city.lat) > 90 ||
      Math.abs(city.lon) > 180
    ) {
      throw new Error(`Ciudad no valida o id duplicado: "${city.id}".`);
    }
    ids.add(city.id);
  }
  for (const connection of connections) {
    if (!ids.has(connection.from) || !ids.has(connection.to) || connection.from === connection.to) {
      throw new Error(`Conexion no valida: "${connection.from}" -> "${connection.to}".`);
    }
    const from = cities.find((city) => city.id === connection.from)!;
    const to = cities.find((city) => city.id === connection.to)!;
    if (latLonToVector3(from.lat, from.lon).distanceToSquared(latLonToVector3(to.lat, to.lon)) < 1e-10) {
      throw new Error("Una conexion necesita dos ubicaciones diferentes.");
    }
  }
}
