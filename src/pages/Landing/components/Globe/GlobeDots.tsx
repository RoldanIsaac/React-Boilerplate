import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useTexture } from "@react-three/drei";
import { Color, InstancedBufferAttribute, Object3D } from "three";
import type { InstancedMesh } from "three";
import { dotsFragment, dotsVertex } from "./shaders";
import { fibonacciSphere, isLand, latLonToVector3 } from "./utils/geo";

interface GlobeDotsProps {
  color: string;
  landMaskUrl: string;
}

export default function GlobeDots({ color, landMaskUrl }: GlobeDotsProps) {
  const texture = useTexture(landMaskUrl);
  const mesh = useRef<InstancedMesh>(null);
  const uniforms = useMemo(() => ({ uColor: { value: new Color(color) } }), [color]);

  const dots = useMemo(() => {
    const image: unknown = texture.image;
    if (!(image instanceof HTMLImageElement) || !image.naturalWidth || !image.naturalHeight) {
      throw new Error("La mascara terrestre debe ser una imagen valida.");
    }
    const canvas = document.createElement("canvas");
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) throw new Error("No se pudo leer la mascara terrestre con Canvas 2D.");
    context.drawImage(image, 0, 0);
    const mask = context.getImageData(0, 0, canvas.width, canvas.height);
    // 100.000 candidatos uniformes producen aproximadamente 29.000 puntos de tierra.
    const points = fibonacciSphere(100_000)
      .filter(({ lat, lon }) => isLand(mask, lat, lon))
      .map(({ lat, lon }) => latLonToVector3(lat, lon, 1.006));
    if (points.length === 0) {
      throw new Error("La mascara terrestre no contiene tierra blanca sobre oceano negro.");
    }
    const opacity = new Float32Array(points.map((_, i) => 0.55 + ((i * 73) % 101) / 225));
    return { points, opacity: new InstancedBufferAttribute(opacity, 1) };
  }, [texture]);

  useLayoutEffect(() => {
    if (!mesh.current) return;
    const transform = new Object3D();
    for (const [index, point] of dots.points.entries()) {
      transform.position.copy(point);
      transform.lookAt(point.clone().multiplyScalar(2));
      transform.updateMatrix();
      mesh.current.setMatrixAt(index, transform.matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
    mesh.current.computeBoundingSphere();
  }, [dots]);

  // La imagen sigue en la cache de Suspense; liberamos su asignacion de GPU.
  useEffect(() => () => texture.dispose(), [texture]);

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, dots.points.length]}>
      <circleGeometry args={[0.0038, 8]}>
        <primitive object={dots.opacity} attach="attributes-aOpacity" />
      </circleGeometry>
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={dotsVertex}
        fragmentShader={dotsFragment}
        transparent
        depthWrite={false}
      />
    </instancedMesh>
  );
}
