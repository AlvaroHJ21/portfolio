'use client';
import { createContext, useState, useContext } from 'react';

// interface CursorConfig {
//   size: 'small' | 'large' | 'medium' | 'default' | 'none';
//   background: 'solid' | 'opacity' | 'blur';
//   content?: string;
// }

interface CursorOptions {
  variant: Variant;
  content?: string;
}

interface CursorContextProps {
  mouseConfig: CursorOptions;
  setMouseConfig: (options: CursorOptions) => void;
}

type Variant = 'default' | 'focus-content' | 'invisible' | 'zoom-transparent';

const CursorContext = createContext({} as CursorContextProps);

export const CursorProvider = ({ children }: any) => {
  const [mouseConfig, setMouseConfig] = useState<CursorOptions>({
    variant: 'default',
  });

  // function setMouse(config: Partial<CursorConfig>) {
  //   setMouseConfig({
  //     background: config.background || mouseConfig.background,
  //     size: config.size || mouseConfig.size,
  //     content: config.content || mouseConfig.content,
  //   });
  // }

  // function reset() {
  //   setMouseConfig({
  //     size: 'default',
  //     background: 'solid',
  //   });
  // }

  return (
    <CursorContext.Provider value={{ mouseConfig, setMouseConfig }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  return useContext(CursorContext);
};
