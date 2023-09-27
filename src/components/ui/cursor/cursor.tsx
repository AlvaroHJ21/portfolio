'use client';

import clsx from 'clsx';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { useCursor } from './CursorContext';

export const Cursor = () => {
  const cursor = useRef(null);

  const { mouseConfig } = useCursor();

  const moveMouse = (event: MouseEvent) => {
    gsap.to(cursor.current, {
      top: event.clientY,
      left: event.clientX,
      duration: 0.3,
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
        'fixed top-0 left-0 z-20 w-20 h-20 -ml-10 -mt-10 rounded-full pointer-events-none transition-transform duration-300 grid place-items-center p-4',
        {
          'scale-[0.15] bg-opacity-100 bg-primary': mouseConfig.variant === 'default',
          'scale-[2] bg-opacity-25 bg-primary': mouseConfig.variant === 'zoom-transparent',
          'scale-[1.5] bg-gray-400 dark:bg-gray-300 bg-opacity-40 dark:bg-opacity-40 backdrop-blur-[2px]':
            mouseConfig.variant === 'focus-content',
          'scale-0 bg-opacity-0': mouseConfig.variant === 'invisible',
        }
      )}
    >
      <span className="text-white text-[8px] font-bold text-center">{mouseConfig?.content}</span>
    </div>
  );
};
