import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { AdditiveBlending, Color, Quaternion, TubeGeometry, Vector3 } from "three";
import type { Mesh, MeshBasicMaterial } from "three";
import { arcFragment, arcVertex } from "./shaders";
import { createConnectionCurve, latLonToVector3 } from "./utils/geo";
import type { GlobeCity, GlobeConnection } from "./utils/geo";

interface AnimationTime {
  value: number;
}

interface GlobeArcsProps {
  cities: readonly GlobeCity[];
  connections: readonly GlobeConnection[];
  color: string;
  time: AnimationTime;
  reducedMotion: boolean;
}

function Arc({
  from, to, index, color, time, reducedMotion,
}: {
  from: GlobeCity;
  to: GlobeCity;
  index: number;
  color: string;
  time: AnimationTime;
  reducedMotion: boolean;
}) {
  const geometry = useMemo(
    () => new TubeGeometry(createConnectionCurve(from, to), 96, 0.0024, 5, false),
    [from, to],
  );
  const uniforms = useMemo(() => ({
    uTime: time,
    uOffset: { value: index * 0.72 },
    uColor: { value: new Color(color) },
    uReducedMotion: { value: reducedMotion ? 1 : 0 },
  }), [time, index, color, reducedMotion]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  return (
    <mesh>
      <primitive object={geometry} attach="geometry" />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={arcVertex}
        fragmentShader={arcFragment}
        transparent
        blending={AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

function CityMarker({
  city, index, color, time, reducedMotion,
}: {
  city: GlobeCity;
  index: number;
  color: string;
  time: AnimationTime;
  reducedMotion: boolean;
}) {
  const ring = useRef<Mesh>(null);
  const material = useRef<MeshBasicMaterial>(null);
  const position = useMemo(() => latLonToVector3(city.lat, city.lon, 1.014), [city]);
  const orientation = useMemo(() => new Quaternion().setFromUnitVectors(
    new Vector3(0, 0, 1), position.clone().normalize(),
  ), [position]);

  useFrame(() => {
    if (!ring.current || !material.current) return;
    const phase = reducedMotion ? 0.3 : ((time.value + index * 0.23) % 2) / 2;
    ring.current.scale.setScalar(1 + phase * 2.3);
    material.current.opacity = (1 - phase) * 0.65;
  });

  return (
    <group position={position} quaternion={orientation}>
      <mesh>
        <circleGeometry args={[0.009, 16]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
      <mesh ref={ring} position-z={0.001}>
        <ringGeometry args={[0.014, 0.017, 24]} />
        <meshBasicMaterial
          ref={material}
          color={color}
          transparent
          opacity={0.6}
          depthWrite={false}
          blending={AdditiveBlending}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

export default function GlobeArcs({ cities, connections, color, time, reducedMotion }: GlobeArcsProps) {
  const byId = useMemo(() => new Map(cities.map((city) => [city.id, city])), [cities]);
  return (
    <group>
      {connections.map((connection, index) => (
        <Arc
          key={`${connection.from}-${connection.to}-${index}`}
          from={byId.get(connection.from)!}
          to={byId.get(connection.to)!}
          index={index}
          color={color}
          time={time}
          reducedMotion={reducedMotion}
        />
      ))}
      {cities.map((city, index) => (
        <CityMarker
          key={city.id}
          city={city}
          index={index}
          color={color}
          time={time}
          reducedMotion={reducedMotion}
        />
      ))}
    </group>
  );
}
