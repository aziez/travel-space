"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTF, GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

function Object3D(props: any) {
  const ref = useRef<THREE.Mesh>(null!);
  const gltf = useLoader(GLTFLoader, props?.model);

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state: any, delta: any) => {
    if (ref.current) {
      ref.current.rotation.y += delta;
    }
  });

  const getScene = (gltf: GLTF | GLTF[]): THREE.Group => {
    if (Array.isArray(gltf)) {
      return gltf[0]?.scene;
    }
    return gltf?.scene;
  };

  return (
    <group {...props} dispose={null}>
      <primitive
        ref={ref}
        scale={0.1}
        object={getScene(gltf)}
        position={[0, 0, 0]}
        onClick={() => click(!clicked)}
      />
    </group>
  );
}

export default function Scene({ model }: any) {
  return (
    <Canvas
      camera={{ position: [-0.5, 100, 2] }}
      shadows
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Object3D model={model} position={[1.2, 0, 0]} />

      <OrbitControls />
    </Canvas>
  );
}
