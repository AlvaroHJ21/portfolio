'use client';
import Link from 'next/link';

import { ButtonDownloadCv, ButtonLink, TextTypeAnimate, useCursor } from '@/components/ui';
import { NetworksLinksVertical } from '@/components/shared';
import { ZoomOutDown, ZoomOutUp } from '@/components/animation';

export const Hero = () => {
  const { setMouseConfig } = useCursor();

  return (
    <main id="home" className="texture">
      <div className="container relative flex flex-col items-center justify-center h-screen gap-8 text-center">
        <div className="flex flex-col items-center gap-2 texts">
          <p className="mb-4 text-gray-600 font-regular text-32 dark:text-white">Hola, soy</p>
          <ZoomOutDown className="mb-6">
            <h1
              onMouseEnter={() =>
                setMouseConfig({
                  variant: 'zoom-transparent',
                })
              }
              onMouseLeave={() => setMouseConfig({ variant: 'default' })}
              className="text-5xl font-black font-raleway md:text-6xl text-main"
            >
              Alvaro Huaysara
            </h1>
          </ZoomOutDown>
          <ZoomOutUp>
            <h2 className="mb-6 text-3xl font-bold text-gray-600 font-raleway dark:text-white">
              Desarrollador{' '}
              <TextTypeAnimate
                className="block md:inline"
                strings={['Frontend', 'Backend', 'Móvil']}
              />
            </h2>
            <p className="font-regular leading-[1.8] text-black max-w-[800px] dark:text-white mb-4 text-balance">
              Apasionado por crear soluciones web innovadoras. Experto en tecnologías front-end y
              back-end, estoy comprometido con la calidad, la usabilidad y la eficiencia en cada
              proyecto. Siempre en busca de nuevos desafíos y oportunidades para aprender y crecer
              en el mundo del desarrollo web.
            </p>
            <p className="font-semibold">¡Explora mi portafolio y ponte en contácto conmigo!</p>
          </ZoomOutUp>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="/#projects">Ver proyectos</ButtonLink>
          <ButtonDownloadCv />
        </div>

        <div className="absolute right-0 hidden sm:block bottom-28">
          <Link
            href="/#contact"
            className="inline-block text-sm text-gray-400 transition-colors rotate-90 hover:text-black dark:hover:text-white"
          >
            Scroll Down
          </Link>
        </div>
      </div>
    </main>
  );
};
