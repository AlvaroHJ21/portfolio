'use client';
import { createContext, useState, useContext } from 'react';

interface CursorConfig {
  size: 'small' | 'large' | 'medium' | 'default' | 'none';
  background: 'solid' | 'opacity' | 'blur';
  content?: string;
}

interface CursorContextProps {
  mouseConfig: CursorConfig | null;
  setMouseConfig: (config: CursorConfig | null) => void;
}

const CursorContext = createContext({} as CursorContextProps);

export const CursorProvider = ({ children }: any) => {
  const [mouseConfig, setMouseConfig] = useState<CursorConfig | null>(null);
  return (
    <CursorContext.Provider value={{ mouseConfig, setMouseConfig }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  return useContext(CursorContext);
};
