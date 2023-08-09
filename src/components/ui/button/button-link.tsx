import Link from 'next/link';
import clsx from 'clsx';

interface Props {
  href: string;
  text: string;
  target?: string;
  download?: string;
  variant?: Variant;
  suffixIcon?: React.ReactNode;
  prefixIcon?: React.ReactNode;
}

type Variant = 'filled' | 'outline';

export const ButtonLink = ({
  href,
  text,
  target,
  download,
  variant = 'filled',
  suffixIcon,
  prefixIcon,
}: Props) => {
  return (
    <Link
      href={href}
      // className={`
      // flex items-center justify-center gap-2 px-4 py-2 font-bold rounded-full border-2 ${
      //   variant === 'filled'
      //     ? 'bg-main border-transparent text-white dark:text-background'
      //     : 'border-main bg-transparent text-main dark:text-white'
      // } my-btn`}
      className={clsx(
        'flex items-center justify-center gap-2 px-4 py-2 font-bold rounded-full border-2 my-btn',
        {
          'bg-main border-transparent text-white dark:text-background': variant === 'filled',
          'border-main bg-transparent text-main dark:text-white': variant === 'outline',
        }
      )}
      target={target}
      download={download}
      aria-label={text}
    >
      {prefixIcon}
      {text}
      {suffixIcon}
    </Link>
  );
};
