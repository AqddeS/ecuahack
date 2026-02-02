import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Wireframe, Icosahedron, Float } from '@react-three/drei';
import * as THREE from 'three';

const CyberShape = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Icosahedron args={[1.2, 0]} ref={meshRef}>
        <meshBasicMaterial color="#000000" transparent opacity={0.05} />
        {/* Cyan wireframe */}
        <Wireframe stroke="#06b6d4" thickness={0.03} dash={false} />
      </Icosahedron>
    </Float>
  );
};

const Hacker3DObject: React.FC = () => {
  return (
    <div className="w-full h-96 absolute top-0 left-0 z-0 opacity-60 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#3b82f6" />
        <CyberShape />
      </Canvas>
    </div>
  );
};

export default Hacker3DObject;