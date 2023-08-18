'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { ComponentProps, useState } from 'react';

export const ImageBlur = (props: ComponentProps<typeof Image>) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      {...props}
      className={clsx(props.className, 'object-cover', {
        'scale-110 blur-2xl grayscale': isLoading,
        'scale-100 blur-0 grayscale-0': !isLoading,
      })}
      onLoadingComplete={() => setLoading(false)}
    />
  );
};
