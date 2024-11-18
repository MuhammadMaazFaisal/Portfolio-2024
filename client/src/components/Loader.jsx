import React from 'react';
import { Html, useProgress } from "@react-three/drei";
import Lottie from 'lottie-react'; // Import Lottie component
import planeAnimation from '../assets/animations/plane.json'; // Import Lottie animation

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Lottie
        animationData={planeAnimation}
        loop={true}
        style={{ height: 300, width: 300 }}
      />
    </Html>
  );
};

export default CanvasLoader;
