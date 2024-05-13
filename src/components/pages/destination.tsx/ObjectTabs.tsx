"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

function Object3D(props: any) {
  const ref = useRef<THREE.Mesh>(null!);
  const gltf = useLoader(GLTFLoader, props?.model);

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state: any, delta: any) => (ref.current.rotation.y += delta));

  return (
    <group {...props} dispose={null}>
      <primitive
        ref={ref}
        scale={0.1}
        object={gltf?.scene}
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
      className="w-full h-ful  "
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
