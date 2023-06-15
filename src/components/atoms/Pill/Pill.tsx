import React, { FC } from "react";

interface IPillProps {
  text: string;
  size?: "x-small" | "small" | "medium" | "large";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "dark"
    | "light";
  onClick?: () => void;
}

export const Pill: FC<IPillProps> = ({ text, color, size }) => {
  let colorClasses = "";
  let colorClassesDot = "";
  let colorClassesText = "";

  switch (color) {
    case "primary":
      colorClasses = "bg-blue-50";
      colorClassesText = "text-blue-700";
      break;
    case "secondary":
      colorClasses = "bg-gray-50";
      colorClassesText = "text-gray-700";
      break;
    case "success":
      colorClasses = "bg-green-50";
      colorClassesText = "text-green-700";
      break;
    case "error":
      colorClasses = "bg-red-50";
      colorClassesText = "text-red-700";
      break;
    case "warning":
      colorClasses = "bg-yellow-50";
      colorClassesText = "text-yellow-700";
      break;
    case "dark":
      colorClasses = "bg-gray-900";
      colorClassesText = "text-gray-200";
      break;
    case "light":
      colorClasses = "bg-gray-50";
      colorClassesText = "text-gray-700";
      break;
    default:
      colorClasses = "bg-blue-50";
      colorClassesText = "text-blue-700";
      break;
  }
  let sizeClasses = "";

  switch (size) {
    case "x-small":
      sizeClasses = "px-1 py-0.5 text-xs";
      break;
    case "small":
      sizeClasses = "px-2 py-1 h-6 text-sm";
      break;
    case "large":
      sizeClasses = "px-6 py-3 text-lg";
      break;
    default:
      sizeClasses = "px-4 py-2 text-base";
      break;
  }
  return (
    <span
      className={` rounded-full ${colorClasses} ${sizeClasses}  ${colorClasses}`}
    >
      <span className={`${colorClassesText}`}>{text}</span>
    </span>
  );
};
