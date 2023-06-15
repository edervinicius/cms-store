import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  children?: string | JSX.Element;
  onChange: (e: any) => void;
}

export const Textarea: FC<InputProps> = ({ children, onChange, ...props }) => {
  return (
    <textarea
      className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      onChange={onChange}
      {...props}
    />
  );
};
