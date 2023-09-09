import { InputHTMLAttributes } from 'react';

// interface Props {
//   placeholder?: string;
//   multiline?: boolean;
//   name?: string;
//   value?: string;
//   type?: HTMLInputTypeAttribute;
//   onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
// }

export const InputText = ({
  multiline = false,
  ...props
}: InputHTMLAttributes<HTMLTextAreaElement | HTMLInputElement> & { multiline?: boolean }) => {
  if (multiline) {
    return (
      <textarea
        className={`w-full px-4 py-2 bg-transparent border-2 outline-none resize-none rounded-2xl border-main text-black dark:text-white my-input`}
        rows={5}
        {...props}
      ></textarea>
    );
  }
  return (
    <input
      className={`w-full px-4 py-3 bg-transparent border-2 rounded-full outline-none border-main text-black dark:text-white my-input`}
      {...props}

      // placeholder={placeholder}
      // name={name}
      // value={value}
      // onChange={onChange}
    />
  );
};
