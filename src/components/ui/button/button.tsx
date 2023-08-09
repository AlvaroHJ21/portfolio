import clsx from 'clsx';

interface Props {
  text: string;
  variant?: Variant;
  suffixIcon?: React.ReactNode;
  prefixIcon?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

type Variant = 'filled' | 'outline';

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
      // className={`flex items-center justify-center gap-2 px-4 py-2 font-bold rounded-full border-2 ${
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
    >
      {prefixIcon}
      {text}
      {suffixIcon}
    </button>
  );
};
