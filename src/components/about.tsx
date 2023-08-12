'use client';

import { useEffect } from 'react';
import Image from 'next/image';

import { BsDownload } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';

import networkLinks from '@/data/networkLinks';
import { ButtonLink } from '@/components/ui/button';

export const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="about-us" className="">
      <div className="max-w-[1200px] w-[90%] m-auto min-h-[756px] py-20 grid place-content-center">
        <div className="flex flex-col h-full gap-16 md:flex-row">
          {/* Imagen */}
          <div data-aos="fade-down" className="">
            <div className="m-auto w-60 xl:w-auto lg:w-96">
              <Image
                className="object-cover transition-transform duration-300 cursor-pointer hover:scale-110"
                src="/img/my-perfil.webp"
                alt="perfil"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Texto y cta */}
          <div data-aos="fade-up" className="flex-1">
            <div className="flex flex-col items-center md:items-start">
              <h2 className="mb-6 font-black text-gray-600 uppercase text-32 dark:text-white">
                Sobre <span className="text-main">mí</span>
              </h2>

              <div className="mb-6 leading-8 text-center text-black md:text-left dark:text-white">
                <p>
                  ¡Hola! Soy un desarrollador web con experiencia en frontend, backend y desarrollo
                  móvil. Me apasiona crear soluciones tecnológicas innovadoras y eficientes. Mi
                  enfoque es siempre centrado en el usuario y en la calidad del código.
                </p>
                <p>
                  Si buscas un desarrollador web confiable, creativo y orientado a resultados, estás
                  en el lugar correcto. ¡Explora mi portafolio y ponte en contacto conmigo!
                </p>
              </div>

              {/* <div className="w-full h-px mb-6 bg-gray-600"></div> */}

              <dl className="grid w-full grid-cols-1 gap-4 p-4 mb-6 text-gray-600 border border-gray-500 rounded-md sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 dark:text-gray-300 backdrop-blur-md">
                <div className="flex gap-2">
                  <dt className="font-bold">Nombre: </dt>
                  <dd>Alvaro Huaysara Jauregui</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-bold">País: </dt>
                  <dd>Perú {'🇵🇪'}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-bold">Email: </dt>
                  <dd>alvarohuaysara@gmail.com</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-bold">Teléfono: </dt>
                  <dd>+51 926513695</dd>
                </div>
              </dl>

              <div className="flex gap-8 mb-6 text-gray-600 dark:text-white">
                {networkLinks.map(({ name, url, icon }) => (
                  <a key={name} href={url} className="btnIcon" target="_blank">
                    {icon}
                  </a>
                ))}
              </div>
              <div className="flex gap-4">
                <ButtonLink href="/#contact" text="Contactame" />
                <ButtonLink
                  text="Descarga mi CV"
                  href="/pdf/CV-AlvaroHJ.pdf"
                  target="_blank"
                  download="CV-AlvaroHJ.pdf"
                  variant="outline"
                  prefixIcon={<BsDownload size={24} />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// bg-cyan-200
