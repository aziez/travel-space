"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
// import earthImg from "";
import { Suspense, useEffect, useRef } from "react";
import Loading from "./Loading";
import {
  CameraControls,
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("./assets/3d//moon.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube008.geometry}
        material={materials["Default OBJ.005"]}
      />
    </group>
  );
}

useGLTF.preload("./assets/3d/moon.glb");

const Planet = ({ position, userData, map }) => {
  const base = useLoader(THREE.TextureLoader, "./assets/3d/mars/texture.jpg");
  const normal = useLoader(
    THREE.TextureLoader,
    "/assets/3d/mars/mars_normal.jpg"
  );
  const bump = useLoader(THREE.TextureLoader, "/assets/3d/mars/mars_b.jpg");
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
      scale={2}
    >
      {/* <directionalLight intensity={3} position={(3, 1, 1)} /> */}
      <directionalLight intensity={1} position={(3, 3, 3)} />
      {/* <ambientLight intensity={2} /> */}
      <hemisphereLight
        position={[-1.25, 1, 1.25]}
        intensity={[5]}
        color={"0xffffff"}
      />
      {/* <pointLight position={[0, 20, 10]} intensity={1.5} /> */}

      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        attach={"material"}
        metalness={0.2}
        map={base}
        normalMap={bump}
        displacementMap={normal}
      />
    </mesh>
  );
};

const PlanetCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [6, 2, 2], fov: 90 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <CameraControls maxDistance={40} minDistance={6.5} />
      {/* <OrbitControls enableZoom={false} /> */}
      <Planet />

      <Preload all />
    </Canvas>
  );
};

export default PlanetCanvas;
