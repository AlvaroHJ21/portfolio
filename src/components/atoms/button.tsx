import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: Variant;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  className?: string;
}

type Variant = 'filled' | 'outline';

export default function Button(props: Props) {

  const { children, variant = 'filled', startIcon, endIcon, className, ...restProps } = props;
  
  return (
    <button
      className={clsx(
        className,
        'flex items-center justify-center gap-2 px-4 py-2 font-bold rounded-full border-2 my-btn',
        {
          'bg-main border-transparent text-white dark:text-background': variant === 'filled',
          'border-main bg-transparent text-main dark:text-white': variant === 'outline',
        }
      )}
      {...restProps}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
}
