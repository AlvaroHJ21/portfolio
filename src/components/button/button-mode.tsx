'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

import { MdDarkMode, MdSunny } from 'react-icons/md';

interface Props {
  iconSize?: number;
}

export const ButtonMode = ({ iconSize = 24 }: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="grid w-12 h-12 text-white border-2 rounded-full place-content-center bg-main border-main btnIcon"
      aria-label="Cambiar modo de color"
    >
      {mounted && theme === 'dark' ? <MdSunny size={iconSize} /> : <MdDarkMode size={iconSize} />}
    </button>
  );
};
