import { Metadata } from 'next';

import About from '@/components/organisms/about';
import Formation from '@/components/organisms/formation';
import Skills from '@/components/organisms/skills';

export const metadata: Metadata = {
  title: 'Sobre mí | Alvaro Huaysara Jauregui | Full Stack Web Developer | Systems Engineer',
};

export default function AboutMePage() {
  return (
    <div className="texture">
      <About />
      <Skills />
      <Formation />
    </div>
  );
}
