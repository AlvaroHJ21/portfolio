'use client';

import React, { useEffect, useRef } from 'react';
// @ts-ignore
import Typed from 'typed.js';

interface Props {
  strings: string[];
  className?: string;
}

export const TextTypeAnimate = ({ strings, className }: Props) => {
  const typed = useRef<Typed>();

  useEffect(() => {
    if (document.querySelector('.text')) {
      typed.current = new Typed('.text', {
        strings: strings, //['Frontend', 'Backend', 'Móvil'],
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
    <div className={className}>
      <span className="text"></span>
    </div>
  );
};
