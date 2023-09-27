'use client';
import Link from 'next/link';

import { BsDownload } from 'react-icons/bs';

import { ButtonDownloadCv, ButtonLink, TextTypeAnimate, useCursor } from '@/components/ui';
import { NetworksLinksVertical } from '@/components/shared';

export const Hero = () => {
  const { setMouseConfig } = useCursor();

  return (
    <main id="home" className="texture">
      <div className="relative w-[90%] h-screen m-auto flex flex-col items-center justify-center gap-8 text-center">
        <div className="flex flex-col items-center gap-2 texts">
          <div data-animation="zoom-out-down" className="mb-6">
            <p className="mb-4 text-gray-600 font-regular text-32 dark:text-white">Hola, soy</p>
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
          </div>
          <div data-animation="zoom-out-up">
            <h2 className="mb-6 text-3xl font-bold text-gray-600 font-raleway dark:text-white">
              Desarrollador{' '}
              <TextTypeAnimate
                className="block md:inline"
                strings={['Frontend', 'Backend', 'Móvil']}
              />
            </h2>
            <p className="font-regular leading-[1.8] text-black max-w-[520px] text-16 dark:text-white">
              Apasionado por crear soluciones tecnológicas innovadoras y eficientes para mejorar la
              experiencia del usuario. ¡Explora mi portafolio y contáctame para hablar sobre tus
              proyectos!
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="/#projects">Ver proyectos</ButtonLink>
          <ButtonDownloadCv />
        </div>

        <NetworksLinksVertical />

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
