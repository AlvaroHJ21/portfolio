import { ComponentProps } from 'react';
import Link from 'next/link';

interface Props extends ComponentProps<typeof Link> {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export default function TextLink(props: Props) {
  const { children, startIcon, endIcon, ...restProps } = props;
  return (
    <Link
      className="flex items-center gap-2 text-gray-400 dark:hover:text-gray-300 hover:text-gray-600"
      {...restProps}
    >
      {startIcon} {children} {endIcon}
    </Link>
  );
}
