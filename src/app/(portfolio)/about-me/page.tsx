import { Metadata } from 'next';

import { About } from '@/containers/about/about';
import { Formation } from '@/containers/formation/formation';
import { Skills } from '@/containers/skills/skills';
import { CarouselTecnologies } from '@/components/carousel';

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
