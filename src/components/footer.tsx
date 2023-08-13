'use client';
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import networkLinks from '@/data/networkLinks';
import { Logo } from '@/components/logo';

export const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer className="bg-gray-100 dark:bg-background">
      <div className="flex flex-col items-center gap-4 pt-16 pb-32">
        <div className='mb-8'>
          <Logo />
        </div>
        <div data-aos="fade-up">
          <div className="flex gap-8 mb-6 text-gray-600 dark:text-white">
            {networkLinks.map(({ name, url, icon }) => (
              <a key={name} href={url} className="btnIcon" target="_blank" aria-label={name}>
                {icon}
              </a>
            ))}
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300"> &copy; 2023 Alvaro Huaysara Jauregui.</p>
      </div>
    </footer>
  );
};
