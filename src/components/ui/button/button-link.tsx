import Link from 'next/link';

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
      className={`
      flex items-center justify-center gap-2 px-4 py-2 font-bold rounded-full border-2 ${
        variant === 'filled'
          ? 'bg-main border-transparent text-background'
          : 'border-main bg-transparent text-main dark:text-white'
      } my-btn`}
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
