import React from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options?: Option[];
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
  return (
    <select
      className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      value={value}
      onChange={onChange}
    >
      {options &&
        options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
    </select>
  );
};
