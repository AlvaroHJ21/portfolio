'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const FadeDown = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { children, ...restProps } = props;

  const elementRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline();

      tl.from(elementRef.current, {
        y: -100,
        opacity: 0,
      });

      ScrollTrigger.create({
        animation: tl,
        trigger: elementRef.current,
        // markers: true,
        start: 'top 90%',
        end: 'top 20%',
        toggleActions: 'play none play none', //reverse
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={elementRef} {...restProps}>
      {children}
    </div>
  );
};
