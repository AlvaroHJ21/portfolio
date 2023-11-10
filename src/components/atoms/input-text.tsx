import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLTextAreaElement | HTMLInputElement> {
  multiline?: boolean;
}

export default function InputText(props: Props) {
  const { multiline = false, ...restProps } = props;
  if (multiline) {
    return (
      <textarea
        className={`w-full px-4 py-2 bg-transparent border-2 outline-none resize-none rounded-2xl border-main text-black dark:text-white my-input`}
        rows={5}
        {...restProps}
      ></textarea>
    );
  }
  return (
    <input
      className={`w-full px-4 py-3 bg-transparent border-2 rounded-full outline-none border-main text-black dark:text-white my-input`}
      {...restProps}
    />
  );
}
