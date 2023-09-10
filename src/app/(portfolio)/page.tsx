// import { Suspense } from 'react';
import { Hero } from '@/components/hero';
// import { Loading } from '@/components/ui';
import ProjectsPage from './projects/page';
import AboutMePage from './about-me/page';
import ContactPage from './contact/page';

export default function Home() {
  return (
    <>
      <Hero />
      {/* Podemos usar Suspense pero como se va generar de forma estática no es necesario */}
      {/* <Suspense fallback={<Loading />}> */}
        <ProjectsPage />
      {/* </Suspense> */}
      <AboutMePage />
      <ContactPage />
    </>
  );
}
