'use client';
import { createContext, useState, useContext } from 'react';

interface CursorConfig {
  size: 'small' | 'large' | 'medium' | 'default' | 'none';
  background: 'solid' | 'opacity' | 'blur';
  content?: string;
}

interface CursorContextProps {
  config: CursorConfig | null;
  setConfig: (config: CursorConfig | null) => void;
}

const CursorContext = createContext({} as CursorContextProps);

export const CursorProvider = ({ children }: any) => {
  const [config, setConfig] = useState<CursorConfig | null>(null);
  return <CursorContext.Provider value={{ config, setConfig }}>{children}</CursorContext.Provider>;
};

export const useCursor = () => {
  return useContext(CursorContext);
};
