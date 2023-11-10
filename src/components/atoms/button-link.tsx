import Link, { LinkProps } from 'next/link';
import { cn } from '@/lib/util';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps & {
    variant?: 'filled' | 'outline';
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
  };

export default function ButtonLink(props: Props) {
  const { variant = "filled", ...restProps } = props;
  return (
    <Link
      className={cn(
        'flex items-center justify-center gap-2 px-4 py-2 font-bold rounded-full border-2 my-btn',
        {
          'bg-main border-transparent text-white dark:text-background': variant === 'filled',
          'border-main bg-transparent text-main dark:text-white': variant === 'outline',
        }
      )}
      {...restProps}
    />
  );
}
