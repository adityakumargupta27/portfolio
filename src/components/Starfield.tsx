import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function VortexStars() {
  const ref = useRef<any>();
  
  // Create 10,000 stars with random positions and speeds
  const count = 10000;
  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      // Random position in a large cube
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      // Random speed for each star
      spd[i] = Math.random() * 0.02 + 0.01;
    }
    return [pos, spd];
  }, []);

  useFrame((state, delta) => {
    const posAttr = ref.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      let x = posAttr.getX(i);
      let y = posAttr.getY(i);
      let z = posAttr.getZ(i);

      // Move toward center (0,0,0)
      x -= x * speeds[i];
      y -= y * speeds[i];
      z -= z * speeds[i];

      // If close to center, respawn far away
      if (Math.abs(x) < 0.1 && Math.abs(y) < 0.1 && Math.abs(z) < 0.1) {
        const radius = 10 + Math.random() * 5;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        x = radius * Math.sin(phi) * Math.cos(theta);
        y = radius * Math.sin(phi) * Math.sin(theta);
        z = radius * Math.cos(phi);
      }

      posAttr.setXYZ(i, x, y, z);
    }
    posAttr.needsUpdate = true;
    ref.current.rotation.z += delta * 0.1;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function AccretionDisk() {
  const meshRef = useRef<any>();
  useFrame((state) => {
    meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.5;
  });

  return (
    <group>
      {/* The Black Hole Center */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      
      {/* The Glowing Ring */}
      <mesh ref={meshRef} rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[1.2, 0.05, 16, 100]} />
        <meshStandardMaterial 
          color="#4a9eff" 
          emissive="#4a9eff" 
          emissiveIntensity={2} 
          transparent 
          opacity={0.8}
        />
      </mesh>
      
      {/* Inner Glow */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.5, 1.5, 64]} />
        <meshBasicMaterial 
          color="#4a9eff" 
          transparent 
          opacity={0.2} 
          side={THREE.DoubleSide} 
        />
      </mesh>
    </group>
  );
}

const BlackHole = () => {
  return (
    <div id="bg-canvas" style={{ background: '#000' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 0]} intensity={2} color="#4a9eff" />
        <VortexStars />
        <AccretionDisk />
      </Canvas>
    </div>
  );
};

export default BlackHole;
