import React, { lazy, memo } from 'react';
import HeroHeader from './HeroHeader';
import HeroIndicator from './HeroIndicator';

const ComputersCanvas = lazy(() => import('./canvas/Computers'));

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] mx-auto">
      <HeroHeader />
      <ComputersCanvas />
      <HeroIndicator />
    </section>
  );
};

export default memo(Hero);