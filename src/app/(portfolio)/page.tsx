// import { Suspense } from 'react';
import Hero from '@/components/organisms/hero';
// import { Loading } from '@/components/atoms';
import ProjectsPage from './projects/page';
import AboutMePage from './about-me/page';
import ContactPage from './contact/page';

export const revalidate = 360;

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
