'use client';

import { useEffect, useRef } from 'react';

import { BsDownload } from 'react-icons/bs';
// @ts-ignore
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { ButtonLink } from '@/components/ui/button';
import networkLinks from '@/data/networkLinks';
import Link from 'next/link';

export const Hero = () => {
  const typed = useRef<Typed>();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (document.querySelector('.text')) {
      typed.current = new Typed('.text', {
        strings: ['Frontend', 'Backend', 'Móvil'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
      });
    }
    return () => {
      typed.current?.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="w-[90%] relative m-auto flex flex-col items-center justify-center gap-8 text-center h-screen"
    >
      <div className="flex flex-col items-center gap-2 texts">
        <div data-aos="zoom-out-down" className="mb-6">
          <p className="mb-4 text-gray-600 font-regular text-32 dark:text-white">Hola, soy</p>
          <h1 className="text-5xl font-black font-raleway md:text-52 text-main">Alvaro Huaysara</h1>
        </div>
        <div data-aos="zoom-out-up">
          <h2 className="mb-6 text-3xl font-bold text-gray-600 font-raleway dark:text-white">
            Desarrollador <br className="sm:hidden" /> <span className="text"></span>
          </h2>
          <p className="font-regular leading-[1.8] text-black max-w-[520px] text-16 dark:text-white">
            Apasionado por crear soluciones tecnológicas innovadoras y eficientes para mejorar la
            experiencia del usuario. ¡Explora mi portafolio y contáctame para hablar sobre tus
            proyectos!
          </p>
        </div>
      </div>

      <div data-aos="fade-up" className="flex flex-col gap-4 sm:flex-row">
        <ButtonLink text="Ver proyectos" href="/projects" />
        <ButtonLink
          text="Descarga mi CV"
          href="/pdf/cv-alvaro-huaysara-jauregui.pdf"
          target="_blank"
          download="cv-alvaro-huaysara-jauregui.pdf"
          variant="outline"
          prefixIcon={<BsDownload size={24} />}
        />
      </div>

      <div className="absolute left-0 flex-col items-center hidden gap-4 sm:flex dark:text-gray-500 bottom-12">
        <ul className="flex flex-col gap-1">
          {networkLinks.map((link) => (
            <li
              key={link.name}
              className="transition-colors scale-50 hover:text-black dark:hover:text-white"
            >
              <a href={link.url} target="_blank" aria-label={link.name}>
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
        <div className="w-px h-10 bg-current"></div>
      </div>

      <div className="absolute right-0 hidden sm:block bottom-28">
        <Link
          href="/contact"
          className="inline-block text-sm transition-colors rotate-90 hover:text-black dark:hover:text-white"
        >
          contáctame
        </Link>
      </div>
    </section>
  );
};
