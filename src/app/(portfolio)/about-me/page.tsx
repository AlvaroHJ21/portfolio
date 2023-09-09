import { Metadata } from 'next';

import { About } from '@/components/about';
import { Formation } from '@/components/formation';
import { Skills, CarouselTecnologies } from '@/components/skills';

export const metadata: Metadata = {
  title: 'Sobre mí | Alvaro Huaysara Jauregui | Full Stack Web Developer | Systems Engineer',
};

export default function AboutMePage() {
  return (
    <div className="texture">
      <About />
      <Skills />
      <CarouselTecnologies />
      <Formation />
    </div>
  );
}
