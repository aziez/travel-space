"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
// import earthImg from "";
import { useRef } from "react";

const Planet = ({ position, userData, map }) => {
  const base = new THREE.TextureLoader().load(
    "./assets/destination/image-mars.png"
  );

  const meshRef = useRef();

  useFrame(({ clock }) => {
    //   const a = clock.elapsedTime();
    const a = clock.elapsedTime;
    meshRef.current.rotation.y = a;
  });

  return (
    <mesh
      visible
      castShadow
      userData={"Hello"}
      position={position}
      ref={meshRef}
    >
      {/* <directionalLight intensity={3} position={(3, 1, 1)} /> */}
      <directionalLight intensity={1} position={(3, 3, 3)} />
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial color={"pink"} />
    </mesh>
  );
};

export default Planet;
