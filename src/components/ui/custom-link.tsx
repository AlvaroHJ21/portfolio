import { ComponentProps } from 'react';
import Link from 'next/link';

interface Props extends ComponentProps<typeof Link> {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const CustomLink = ({ children, startIcon, endIcon, ...props }: Props) => {
  return (
    <Link
      {...props}
      className="flex items-center gap-2 text-gray-400 dark:hover:text-gray-300 hover:text-gray-600"
    >
      {startIcon} {children} {endIcon}
    </Link>
  );
};
