'use client';

import clsx from 'clsx';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { useCursor } from './CursorContext';

export const MagicCursor = () => {
  const cursor = useRef(null);

  const { mouseConfig: config } = useCursor();

  const moveMouse = (event: MouseEvent) => {
    gsap.to(cursor.current, {
      top: event.clientY,
      left: event.clientX,
      duration: 0.2,
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', moveMouse);

    return () => window.removeEventListener('mousemove', moveMouse);
  }, []);

  return (
    <div
      ref={cursor}
      className={clsx(
        'fixed top-0 left-0 z-20 w-20 h-20 -ml-10 -mt-10 rounded-full pointer-events-none transition-transform duration-300 grid place-items-center text-white text-[8px] font-bold text-center p-4',
        {
          'scale-[0.15] bg-opacity-100 bg-primary': !config,

          'bg-opacity-25 bg-primary': config?.background === 'opacity',
          'bg-gray-300 bg-opacity-40 backdrop-blur-sm': config?.background === 'blur',
          
          'scale-[0]': config?.size === 'none',
          'scale-[0.15]': config?.size === 'default',
          'scale-[1]': config?.size === 'small',
          'scale-[1.5]': config?.size === 'medium',
          'scale-[2]': config?.size === 'large',
        }
      )}
    >
      {config?.content}
    </div>
  );
};
