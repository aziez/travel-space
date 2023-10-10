"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import { CameraControls, OrbitControls, Preload } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Planet = ({ position, planetData }) => {
  const base = useLoader(THREE.TextureLoader, planetData?.images?.map);
  const normal = useLoader(
    THREE.TextureLoader,
    "assets/3d/mars/mars_normal.jpg"
  );
  const bump = useLoader(THREE.TextureLoader, "assets/3d/mars/mars_b.jpg");
  const meshRef = useRef();

  useFrame(({ clock }) => {
    //   const a = clock.elapsedTime();
    const a = clock.elapsedTime;
    meshRef.current.rotation.y = a;
  });

  const gltf = useLoader(GLTFLoader, planetData?.model);
  const groupRef = useRef();

  useEffect(() => {
    if (groupRef.current && gltf.scene) {
      groupRef.current.add(gltf.scene);
    }
  }, [gltf.scene]);

  return (
    // <group dispose={null} ref={groupRef} position={[0, 0, 0]} />
    // {/* <primitive object={gltf.scene} /> */}
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

const PlanetCanvas = ({ data }) => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [6, 2, 2], fov: 90 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <CameraControls maxDistance={40} minDistance={6.5} />

      <Planet planetData={data} />

      <Preload all />
    </Canvas>
    //     <Canvas>
    //       <ambientLight intensity={0.5} />
    //       <pointLight position={[10, 10, 10]} />
    //
    //       <Planet planetData={data} />
    //       <OrbitControls />
    //     </Canvas>
  );
};

export default PlanetCanvas;
