import { ComponentProps } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface Props extends ComponentProps<typeof Link> {
  children: React.ReactNode;
  download?: string;
  variant?: Variant;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

type Variant = 'filled' | 'outline';

export const ButtonLink = ({
  children,
  variant = 'filled',
  startIcon,
  endIcon,
  ...props
}: Props) => {
  return (
    <Link
      className={clsx(
        'flex items-center justify-center gap-2 px-4 py-2 font-bold rounded-full border-2 my-btn',
        {
          'bg-main border-transparent text-white dark:text-background': variant === 'filled',
          'border-main bg-transparent text-main dark:text-white': variant === 'outline',
        }
      )}
      {...props}
    >
      {startIcon}
      {children}
      {endIcon}
    </Link>
  );
};
