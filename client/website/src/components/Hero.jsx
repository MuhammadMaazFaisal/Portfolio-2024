import React, { lazy, memo, Suspense } from "react";
import HeroHeader from "./HeroHeader";
import HeroIndicator from "./HeroIndicator";

const ComputersCanvas = lazy(() => import("./canvas/Computers"));

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] mx-auto">
      <HeroHeader />
      <Suspense fallback={null}>
        <ComputersCanvas />
      </Suspense>
      <HeroIndicator />
    </section>
  );
};

export default memo(Hero);
