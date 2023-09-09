import { Hero } from '@/components/hero';
import ProjectsPage from './projects/page';
import AboutMePage from './about-me/page';
import ContactPage from './contact/page';

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsPage />
      <AboutMePage />
      <ContactPage />
    </>
  );
}
