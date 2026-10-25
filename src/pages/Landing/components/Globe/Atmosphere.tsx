import { useMemo } from "react";
import { AdditiveBlending, BackSide, Color } from "three";
import { atmosphereFragment, atmosphereVertex } from "./shaders";

export default function Atmosphere() {
  const uniforms = useMemo(() => ({ uColor: { value: new Color("#635bff") } }), []);

  return (
    <mesh scale={1.09} renderOrder={2}>
      <sphereGeometry args={[1, 64, 64]} />
      <shaderMaterial
        vertexShader={atmosphereVertex}
        fragmentShader={atmosphereFragment}
        uniforms={uniforms}
        side={BackSide}
        blending={AdditiveBlending}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}
