'use client';
import { useLayoutEffect } from 'react';

// import AOS from 'aos';
// import 'aos/dist/aos.css';

import networkLinks from '@/data/networkLinks';
import { Logo } from '@/components/logo';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Footer = () => {
  // useEffect(() => {
  //   AOS.init();
  // }, []);

  useLayoutEffect(() => {
    console.log('inciando animaciones');

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const arrayFadeUp = gsap.utils.toArray<HTMLElement>("[data-aos='fade-up']");
      const arrayFadeDown = gsap.utils.toArray<HTMLElement>("[data-aos='fade-down']");

      arrayFadeUp.forEach((element) => {
        const tl = gsap.timeline();

        tl.from(element, {
          y: 100,
          opacity: 0,
        });

        ScrollTrigger.create({
          animation: tl,
          trigger: element,
          // markers: true,
          start: 'top 90%',
          end: 'top 20%',
          toggleActions: 'play none play reverse',
        });
      });

      arrayFadeDown.forEach((element) => {
        const tl = gsap.timeline();

        tl.from(element, {
          y: -100,
          opacity: 0,
        });

        ScrollTrigger.create({
          animation: tl,
          trigger: element,
          // markers: true,
          start: 'top 90%',
          end: 'top 20%',
          toggleActions: 'play none play reverse',
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer className="bg-gray-50 dark:bg-background">
      <div className="flex flex-col items-center gap-4 pt-16 pb-32">
        <div className="mb-8">
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
