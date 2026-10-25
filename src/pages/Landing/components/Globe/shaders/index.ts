export const atmosphereVertex = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vView = normalize(-viewPosition.xyz);
    gl_Position = projectionMatrix * viewPosition;
  }
`;

export const atmosphereFragment = /* glsl */ `
  uniform vec3 uColor;
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    // BackSide: la intensidad crece cerca del limbo, no en el centro.
    float facing = max(dot(-normalize(vNormal), normalize(vView)), 0.0);
    float fresnel = pow(1.0 - facing, 2.5) * smoothstep(0.0, 0.35, facing);
    gl_FragColor = vec4(uColor, fresnel * 0.65);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

export const dotsVertex = /* glsl */ `
  attribute float aOpacity;
  varying float vOpacity;
  void main() {
    vOpacity = aOpacity;
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  }
`;

export const dotsFragment = /* glsl */ `
  uniform vec3 uColor;
  varying float vOpacity;
  void main() {
    gl_FragColor = vec4(uColor, vOpacity);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

export const arcVertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const arcFragment = /* glsl */ `
  uniform float uTime;
  uniform float uOffset;
  uniform float uReducedMotion;
  uniform vec3 uColor;
  varying vec2 vUv;
  void main() {
    float cycle = mod(uTime + uOffset, 7.5);
    float travel = clamp((cycle - 0.6) / 3.8, 0.0, 1.0);
    float envelope = smoothstep(0.0, 0.8, cycle) * (1.0 - smoothstep(4.8, 6.2, cycle));
    float head = exp(-pow((vUv.x - travel) / 0.055, 2.0));
    float trail = smoothstep(travel - 0.35, travel, vUv.x) * step(vUv.x, travel);
    float alpha = envelope * (0.13 + head * 0.85 + trail * 0.22);
    alpha = mix(alpha, 0.55, uReducedMotion);
    gl_FragColor = vec4(uColor * (1.0 + head * (1.0 - uReducedMotion)), alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;
