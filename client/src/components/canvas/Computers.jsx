import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from 'three';

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");
  const groupRef = useRef();
  const [rotationStarted, setRotationStarted] = useState(false);
  const rotationY = useRef(Math.PI); // Start at 180 degrees (showing the back)
  const targetRotationY = -0.2; // Desired final rotation

  // Start the rotation after the model has loaded
  useEffect(() => {
    if (scene) {
      setRotationStarted(true);
    }
  }, [scene]);

  useFrame((state, delta) => {
    if (groupRef.current && rotationStarted) {
      // Adjust the interpolation factor for a slower rotation
      rotationY.current = THREE.MathUtils.lerp(
        rotationY.current,
        targetRotationY,
        delta * 0.5 // Adjust this value for speed
      );

      groupRef.current.rotation.y = rotationY.current;

      // Stop the animation when close enough to the target rotation
      if (Math.abs(rotationY.current - targetRotationY) < 0.001) {
        groupRef.current.rotation.y = targetRotationY;
        // Stop further updates
        setRotationStarted(false);
      }
    }
  });

  return (
    <group ref={groupRef} rotation={[0, Math.PI, 0]}>
      {/* Lighting setup */}
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

      {/* The computer model */}
      <primitive
        object={scene}
        scale={isMobile ? 0.6 : 0.8}
        position={isMobile ? [-1.7, -3, -2.2] : [0, -3.25, -1.5]}
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* Place the Computers component inside the Canvas */}
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
