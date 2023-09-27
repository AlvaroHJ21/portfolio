'use client';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const AnimationsProvider = ({ children }: any) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const arrayFadeUp = gsap.utils.toArray<HTMLElement>("[data-animation='fade-up']");
      const arrayFadeDown = gsap.utils.toArray<HTMLElement>("[data-animation='fade-down']");

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

    return () => {
      ctx.revert();
    };
  }, []);
  return children;
};
