import assert from "node:assert/strict";
import { test } from "node:test";
import { DEFAULT_CITIES, DEFAULT_CONNECTIONS } from "../data.ts";
import {
  createConnectionCurve,
  fibonacciSphere,
  isLand,
  latLonToUV,
  latLonToVector3,
  validateGlobeData,
} from "./geo.ts";

test("coordenadas cardinales, radio y UV equirectangulares", () => {
  assert.deepEqual(latLonToVector3(0, 0).toArray(), [1, 0, -0]);
  assert.ok(Math.abs(latLonToVector3(90, 0).y - 1) < 1e-10);
  assert.ok(Math.abs(latLonToVector3(0, -90).z - 1) < 1e-10);
  assert.ok(Math.abs(latLonToVector3(-30, 70, 2).length() - 2) < 1e-10);
  assert.deepEqual(latLonToUV(0, 0), { u: 0.5, v: 0.5 });
  assert.deepEqual(latLonToUV(90, -180), { u: 0, v: 0 });
  assert.deepEqual(latLonToUV(-90, 180), { u: 0, v: 1 });
});

test("Fibonacci es determinista, uniforme y no duplica los polos", () => {
  const points = fibonacciSphere(100_000);
  assert.equal(points.length, 100_000);
  const bands = Array(10).fill(0);
  for (const point of points) {
    assert.ok(point.lat > -90 && point.lat < 90);
    assert.ok(point.lon >= -180 && point.lon < 180);
    const y = latLonToVector3(point.lat, point.lon).y;
    bands[Math.min(9, Math.floor((y + 1) * 5))]++;
  }
  assert.ok(bands.every((count) => count === 10_000));
  assert.deepEqual(fibonacciSphere(10), fibonacciSphere(10));
});

test("la mascara solo acepta tierra blanca y opaca, con bordes seguros", () => {
  const mask = {
    width: 2, height: 2,
    data: new Uint8ClampedArray([
      255, 255, 255, 255, 0, 0, 0, 255,
      255, 255, 255, 0, 255, 255, 255, 255,
    ]),
  };
  assert.equal(isLand(mask, 90, -180), true);
  assert.equal(isLand(mask, 90, 0), false);
  assert.equal(isLand(mask, -90, -180), false);
  assert.equal(isLand(mask, -90, 0), true);
  assert.equal(isLand(mask, 90, 180), true);
});

test("las rutas cortas, largas, polares y antipodales permanecen fuera de la esfera", () => {
  const routes = [
    [{ lat: 40, lon: -74 }, { lat: 51, lon: 0 }],
    [{ lat: -33.87, lon: 151.2 }, { lat: 37.77, lon: -122.4 }],
    [{ lat: 0, lon: 0 }, { lat: 0, lon: 180 }],
    [{ lat: 90, lon: 0 }, { lat: -90, lon: 0 }],
    [{ lat: 0, lon: 0 }, { lat: 0.00001, lon: 0 }],
    [{ lat: 0, lon: 179 }, { lat: 0, lon: -179 }],
  ];
  for (const [from, to] of routes) {
    const curve = createConnectionCurve(from, to);
    assert.ok(curve.getPoint(0).distanceTo(latLonToVector3(from.lat, from.lon, 1.018)) < 1e-7);
    assert.ok(curve.getPoint(1).distanceTo(latLonToVector3(to.lat, to.lon, 1.018)) < 1e-7);
    for (let index = 0; index <= 1000; index++) {
      const point = curve.getPoint(index / 1000);
      assert.ok(Number.isFinite(point.length()));
      assert.ok(point.length() >= 1.0179);
    }
  }
});

test("los datos invalidos se notifican en lugar de omitir conexiones", () => {
  const cities = [
    { id: "a", name: "A", lat: 0, lon: 0 },
    { id: "b", name: "B", lat: 30, lon: 30 },
  ];
  assert.doesNotThrow(() => validateGlobeData(cities, [{ from: "a", to: "b" }]));
  assert.throws(() => validateGlobeData([...cities, cities[0]], []), /duplicado/);
  assert.throws(() => validateGlobeData([{ ...cities[0], lat: NaN }], []), /no valida/);
  assert.throws(() => validateGlobeData([{ ...cities[0], lon: 181 }], []), /no valida/);
  assert.throws(() => validateGlobeData(cities, [{ from: "a", to: "missing" }]), /no valida/);
  assert.throws(() => validateGlobeData(cities, [{ from: "a", to: "a" }]), /no valida/);
  assert.throws(() => validateGlobeData(
    [cities[0], { ...cities[0], id: "b" }], [{ from: "a", to: "b" }],
  ), /diferentes/);
});

test("las diez ciudades y las rutas predeterminadas son validas y visibles", () => {
  assert.equal(DEFAULT_CITIES.length, 10);
  assert.equal(DEFAULT_CONNECTIONS.length, 10);
  assert.doesNotThrow(() => validateGlobeData(DEFAULT_CITIES, DEFAULT_CONNECTIONS));
  const cities = new Map(DEFAULT_CITIES.map((city) => [city.id, city]));
  for (const { from, to } of DEFAULT_CONNECTIONS) {
    const curve = createConnectionCurve(cities.get(from), cities.get(to));
    for (let index = 0; index <= 200; index++) {
      assert.ok(curve.getPoint(index / 200).length() >= 1.0179);
    }
  }
});
