import { About } from '@/components/about';
import { CarouselTecnologies } from '@/components/carousel-tecnologies';
import { Formation } from '@/components/formation';
import { Skills } from '@/components/skills';
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
