// 'use client';
// import { ThemeProvider } from 'next-themes';
// import React, { useState, useEffect } from 'react';

// interface Props {
//   children: React.ReactNode;
// }

// export default function Provider({ children }: Props) {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return (
//       <>
//         {children}
//       </>
//     );
//   }

//   return <ThemeProvider attribute="class">{children}</ThemeProvider>;
// }

'use client';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';

export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
