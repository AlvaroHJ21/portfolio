'use client';

import React, { useEffect } from 'react';

import { networkLinks } from '@/data';
import { useCursor } from '../ui/cursor/CursorContext';
import gsap from 'gsap';

export const NetworksLinksVertical = () => {
  const { setMouseConfig } = useCursor();

  useEffect(() => {
    const section = document.querySelector('#about-me');
    const home = document.querySelector('#home');
    const element = document.querySelector('#network-links');

    // Creamos un observer para observar la sección
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Si la sección es visible, ejecutamos la animación con GSAP
            gsap.to(element, { opacity: 1, y: 0 });
          } else {
            // Si la sección no es visible, podríamos revertir la animación si es necesario
            gsap.to(element, { opacity: 0, y: 50 });
          }
        });
      },
      {
        threshold: 0.5,
        // rootMargin: '-100px 0px -500px 0px',
      }
    );

    if (section) {
      observer.observe(section);
    }
    if (home) {
      observer.observe(home);
    }

    // Detenemos la observación cuando el componente se desmonta
    return () => {
      if (section) {
        observer.unobserve(section);
      }
      if (home) {
        observer.unobserve(home);
      }
    };
  }, []);

  return (
    <div className="fixed z-0 w-full bottom-10">
      <div className="container relative">
        <div className="absolute bottom-0">
          <div
            id="network-links"
            className="flex-col items-center hidden gap-4 text-gray-400 w-fit sm:flex dark:text-gray-500"
          >
            <ul className="flex flex-col gap-2">
              {networkLinks.map((link) => (
                <li
                  onMouseEnter={() =>
                    setMouseConfig({
                      variant: 'invisible',
                    })
                  }
                  onMouseLeave={() => setMouseConfig({ variant: 'default' })}
                  key={link.name}
                  className="transition-colors scale-75 hover:text-black dark:hover:text-white"
                >
                  <a href={link.url} target="_blank" aria-label={link.name}>
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
            <div className="w-px h-10 bg-current"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
