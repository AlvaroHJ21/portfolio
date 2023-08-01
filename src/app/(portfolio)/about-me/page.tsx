import About from '@/components/about/About';
import CarouselTecnologies from '@/components/carousel/CarouselTecnologies';
import Formation from '@/components/formation/Formation';
import Skills from '@/components/skills/Skills';
import React from 'react';

export default function AboutMePage() {
  return (
    <div>
      <About />
      <Skills />
      <CarouselTecnologies />
      <Formation />
    </div>
  );
}
