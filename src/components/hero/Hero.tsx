'use client';

import { useEffect, useRef } from 'react';

import { BsDownload } from 'react-icons/bs';
// @ts-ignore
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

import LinkButton from '../button/LinkButton';

export default function Hero() {
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
      className="w-[90%] m-auto flex flex-col items-center justify-center gap-8 text-center h-screen"
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
        <LinkButton text="Ver proyectos" href="/projects" />
        <LinkButton
          text="Descarga mi CV"
          href="/pdf/CV-AlvaroHJ.pdf"
          target="_blank"
          download="CV-AlvaroHJ.pdf"
          variant="outline"
          prefixIcon={<BsDownload size={24} />}
        />
      </div>
    </section>
  );
}
