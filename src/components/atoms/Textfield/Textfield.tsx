import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: string | JSX.Element;
  onChange: (e: any) => void;
}

export const Textfield: FC<InputProps> = ({ children, onChange, ...props }) => {
  return (
    <input
      className="box-border px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      onChange={onChange}
      {...props}
    />
  );
};
