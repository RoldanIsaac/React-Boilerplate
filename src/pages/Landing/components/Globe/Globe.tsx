import {
  Component,
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { CSSProperties, ErrorInfo, ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MathUtils } from "three";
import type { Group } from "three";
import Atmosphere from "./Atmosphere";
import GlobeArcs from "./GlobeArcs";
import GlobeDots from "./GlobeDots";
import { DEFAULT_CITIES, DEFAULT_CONNECTIONS } from "./data";
import { validateGlobeData } from "./utils/geo";
import type { GlobeCity, GlobeConnection } from "./utils/geo";

export interface GlobeProps {
  /** Diametro en pixeles; se adapta al ancho disponible. */
  size?: number;
  dotColor?: string;
  arcColor?: string;
  /** 1 equivale a una vuelta cada 60 segundos; admite valores negativos. */
  autoRotateSpeed?: number;
  cities?: readonly GlobeCity[];
  connections?: readonly GlobeConnection[];
  /** PNG equirectangular 2:1, tierra blanca y oceano negro. */
  landMaskUrl?: string;
  className?: string;
  style?: CSSProperties;
}

class GlobeErrorBoundary extends Component<
  { children: ReactNode },
  { error: Error | null }
> {
  state: { error: Error | null } = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("No se pudo mostrar el globo.", error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div role="alert" style={{ padding: 24, color: "#b5b0ff" }}>
          No se pudo cargar el globo: {this.state.error.message}
        </div>
      );
    }
    return this.props.children;
  }
}

function GlobeScene({
  dotColor,
  arcColor,
  autoRotateSpeed,
  cities,
  connections,
  landMaskUrl,
  active,
  reducedMotion,
}: Required<
  Pick<
    GlobeProps,
    | "dotColor"
    | "arcColor"
    | "autoRotateSpeed"
    | "cities"
    | "connections"
    | "landMaskUrl"
  >
> & { active: boolean; reducedMotion: boolean }) {
  const globe = useRef<Group>(null);
  const dragging = useRef(false);
  const speed = useRef(0);
  const time = useMemo(() => ({ value: 1.2 }), []);

  validateGlobeData(cities, connections);
  if (!Number.isFinite(autoRotateSpeed)) {
    throw new Error("autoRotateSpeed debe ser un numero finito.");
  }

  useFrame((_, delta) => {
    // Evita saltos al volver de una pestana oculta o de una pausa larga.
    const dt = Math.min(delta, 0.05);
    if (!active || reducedMotion) return;
    time.value += dt;
    speed.current = MathUtils.damp(
      speed.current,
      dragging.current ? 0 : autoRotateSpeed,
      2,
      dt,
    );
    if (globe.current)
      globe.current.rotation.y += (speed.current * dt * Math.PI) / 30;
  }, -2);

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[-3, 4, 5]} intensity={2.5} color="#c5c2ff" />
      <group rotation={[0, 0, MathUtils.degToRad(23.5)]}>
        <group ref={globe} rotation={[0, -0.25, 0]}>
          <mesh>
            <sphereGeometry args={[1, 96, 64]} />
            <meshPhongMaterial
              color="#0a2540"
              specular="#39386b"
              shininess={24}
            />
          </mesh>
          <GlobeDots color={dotColor} landMaskUrl={landMaskUrl} />
          <GlobeArcs
            cities={cities}
            connections={connections}
            color={arcColor}
            time={time}
            reducedMotion={reducedMotion}
          />
          <Atmosphere />
        </group>
      </group>
      <OrbitControls
        enabled={active}
        enableZoom={false}
        enablePan={false}
        enableDamping={!reducedMotion}
        dampingFactor={0.065}
        rotateSpeed={0.55}
        onStart={() => {
          dragging.current = true;
        }}
        onEnd={() => {
          dragging.current = false;
        }}
      />
    </>
  );
}

export default function Globe({
  size = 1500,
  dotColor = "#7a73ff",
  arcColor = "#b4aaff",
  autoRotateSpeed = 0.25,
  cities = DEFAULT_CITIES,
  connections = DEFAULT_CONNECTIONS,
  landMaskUrl = `${import.meta.env.BASE_URL}earth-landmask.png`,
  className,
  style,
}: GlobeProps) {
  const container = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [documentVisible, setDocumentVisible] = useState(true);
  // Sin movimiento hasta conocer la preferencia del sistema.
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onPreference = () => setReducedMotion(preference.matches);
    const onVisibility = () => setDocumentVisible(!document.hidden);
    onPreference();
    onVisibility();
    preference.addEventListener("change", onPreference);
    document.addEventListener("visibilitychange", onVisibility);

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 },
    );
    if (container.current) observer.observe(container.current);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", onPreference);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const active = visible && documentVisible;
  return (
    <div
      ref={container}
      className={className}
      role="group"
      aria-label="Interactive globe with connections between cities. Drag to rotate."
      style={{
        width: size,
        maxWidth: "100%",
        aspectRatio: "1",
        position: "relative",
        ...style,
      }}
    >
      <GlobeErrorBoundary key={landMaskUrl}>
        <Canvas
          dpr={[1, 2]}
          gl={{ alpha: true, antialias: true }}
          camera={{ position: [0, 0, 4.6], fov: 45, near: 0.1, far: 50 }}
          frameloop={!active ? "never" : reducedMotion ? "demand" : "always"}
          fallback={
            <div role="alert">Your browser does not support WebGL.</div>
          }
          style={{ background: "transparent", touchAction: "pan-y" }}
        >
          <Suspense
            fallback={
              <mesh>
                <sphereGeometry args={[1, 24, 16]} />
                <meshBasicMaterial color="#0a2540" wireframe />
              </mesh>
            }
          >
            <GlobeScene
              dotColor={dotColor}
              arcColor={arcColor}
              autoRotateSpeed={autoRotateSpeed}
              cities={cities}
              connections={connections}
              landMaskUrl={landMaskUrl}
              active={active}
              reducedMotion={reducedMotion}
            />
          </Suspense>
        </Canvas>
      </GlobeErrorBoundary>
    </div>
  );
}
