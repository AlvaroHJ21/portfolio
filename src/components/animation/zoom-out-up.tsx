'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export const ZoomOutUp = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { children, ...restProps } = props;

  const elementRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(elementRef.current, {
        y: 100,
        opacity: 0,
        scale: 1.5,
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
