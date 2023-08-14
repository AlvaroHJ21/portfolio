'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export const ImageBlur = ({
  src,
  alt,
  width = 800,
  height = 600,
  priority = false,
  className,
}: Props) => {
  const [isLoading, setLoading] = useState(true);
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted)
  //   return <div className={`w-[${width}px] h-[${height}px] bg-gray-200 animate-pulse`}></div>;

  return (
    <Image
      alt={alt}
      src={src}
      width={width}
      height={height}
      className={clsx(
        'object-cover',
        {
          'scale-110 blur-2xl grayscale': isLoading,
          'scale-100 blur-0 grayscale-0': !isLoading,
        },
        className
      )}
      onLoadingComplete={() => setLoading(false)}
      priority={priority}
    />
  );
};
