import { Metadata } from 'next';

import { About } from '@/components/about';
import { CarouselTecnologies } from '@/components/carousel-tecnologies';
import { Formation } from '@/components/formation';
import { Skills } from '@/components/skills';

export const metadata: Metadata = {
  title: 'Sobre mí | Alvaro Huaysara Jauregui | Full Stack Web Developer | Systems Engineer',
};

export default function AboutMePage() {
  return (
    <>
      <About />
      <Skills />
      <CarouselTecnologies />
      <Formation />
    </>
  );
}
