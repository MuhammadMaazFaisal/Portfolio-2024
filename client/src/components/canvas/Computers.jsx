import React, { Suspense, useEffect, useState, useRef, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from 'three';

const Computers = memo(({ isMobile }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");
  const groupRef = useRef();
  const [rotationStarted, setRotationStarted] = useState(false);
  const rotationY = useRef(Math.PI); // Start at 180 degrees (showing the back)
  const targetRotationY = -0.2; // Desired final rotation

  useEffect(() => {
    if (scene) {
      setRotationStarted(true);
    }
  }, [scene]);

  useFrame((state, delta) => {
    if (groupRef.current && rotationStarted) {
      rotationY.current = THREE.MathUtils.lerp(
        rotationY.current,
        targetRotationY,
        delta * 0.5 // Adjust this value for speed
      );

      groupRef.current.rotation.y = rotationY.current;

      if (Math.abs(rotationY.current - targetRotationY) < 0.001) {
        groupRef.current.rotation.y = targetRotationY;
        setRotationStarted(false);
      }
    }
  });

  return (
    <group ref={groupRef} rotation={[0, Math.PI, 0]}>
      <directionalLight
        position={[10, 30, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.6 : 0.8}
        position={isMobile ? [-1.7, -3, -2.2] : [0, -3.25, -1.5]}
      />
    </group>
  );
});

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 500px)").matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
