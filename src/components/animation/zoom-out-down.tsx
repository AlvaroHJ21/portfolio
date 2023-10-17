'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export const ZoomOutDown = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { children, ...restProps } = props;

  const elementRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        elementRef.current,
        {
          y: -50,
          opacity: 0,
          scale: 1.2,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
        }
      );
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
