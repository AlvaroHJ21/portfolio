'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

import { MdDarkMode, MdSunny } from 'react-icons/md';

interface Props {
  size?: number;
}

export const ButtonMode = ({ size = 24 }: Props) => {
  const [mode, setMode] = useState<string>('dark');
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if (currentTheme) setMode(currentTheme);
    setMounted(true);
  }, []);

  function handleToggleMode() {
    if (mode === 'dark') {
      localStorage.theme = 'light';
      setMode('light');
      setTheme('light');
    } else {
      localStorage.theme = 'dark';
      setMode('dark');
      setTheme('dark');
    }
  }
  return (
    <button
      onClick={() => handleToggleMode()}
      className="p-1 text-white border-2 rounded-full bg-main border-main btnIcon"
      aria-label="Cambiar modo de color"
    >
      {mode === 'dark' ? (
        <MdSunny size={size} className={mounted ? '' : 'opacity-0'} />
      ) : (
        <MdDarkMode size={size} className={mounted ? '' : 'opacity-0'} />
      )}
    </button>
  );
};
