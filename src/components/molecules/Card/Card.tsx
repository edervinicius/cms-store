import { FC } from "react";

interface CardProps {
  title?: string;
  children?: string | JSX.Element | JSX.Element[];
}

export const Card: FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-4">
      {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
      {children}
    </div>
  );
};
