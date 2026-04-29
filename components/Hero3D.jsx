'use client';

/**
 * Hero3D — lightweight isolated 3D background.
 * Uses Three.js / R3F with a simple particle field.
 * Imported via dynamic() with ssr:false — zero impact on SSR.
 *
 * To disable: remove the dynamic import in Hero.jsx and use HeroStatic instead.
 */

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* Floating particles ────────────────────────────────────────────────────── */
function Particles({ count = 80 }) {
  const meshRef = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 14;  // x
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;  // y
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;   // z
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.02;
    meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.01) * 0.1;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#c9a96e"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

/* Thin grid lines ───────────────────────────────────────────────────────── */
function GridLines() {
  const linesRef = useRef();

  useFrame(({ clock }) => {
    if (!linesRef.current) return;
    linesRef.current.rotation.x = clock.getElapsedTime() * 0.005;
    linesRef.current.rotation.z = clock.getElapsedTime() * 0.003;
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const verts = [];
    const size = 10;
    const step = 1.5;
    for (let i = -size; i <= size; i += step) {
      verts.push(-size, i, 0, size, i, 0);
      verts.push(i, -size, 0, i, size, 0);
    }
    geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    return geo;
  }, []);

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial color="#1f1f2b" transparent opacity={0.5} />
    </lineSegments>
  );
}

/* Main export ───────────────────────────────────────────────────────────── */
export default function Hero3D() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}  // cap DPR for performance
      >
        <GridLines />
        <Particles count={100} />
      </Canvas>
    </div>
  );
}
