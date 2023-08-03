interface Props {
  text: string;
  variant?: Variant;
  suffixIcon?: React.ReactNode;
  prefixIcon?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

type Variant = 'filled' | 'outline';

import React from 'react';

export const Button = ({
  text,
  variant = 'filled',
  suffixIcon,
  prefixIcon,
  onClick,
  type,
}: Props) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex items-center justify-center gap-2 px-4 py-2 font-bold rounded-full border-2 ${
        variant === 'filled'
          ? 'bg-main border-transparent text-white'
          : 'border-main bg-transparent text-main dark:text-white'
      } btn`}
    >
      {prefixIcon}
      {text}
      {suffixIcon}
    </button>
  );
};
