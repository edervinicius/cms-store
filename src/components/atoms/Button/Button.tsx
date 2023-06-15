import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string | JSX.Element | any;
  size?: "x-small" | "small" | "medium" | "large";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "dark"
    | "light";
  intensity?: "soft" | "regular" | "strong";
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  size,
  color,
  intensity = "regular",
  onClick,
  ...props
}) => {
  let sizeClasses = "";

  switch (size) {
    case "x-small":
      sizeClasses = "px-1 py-0.5 text-xs";
      break;
    case "small":
      sizeClasses = "px-3 py-2 h-7 text-sm";
      break;
    case "large":
      sizeClasses = "px-6 py-3 text-lg";
      break;
    default:
      sizeClasses = "px-4 py-2 text-base";
      break;
  }

  let colorClasses = "";
  let colorClassesHover = "";
  let textColor = "";

  switch (color) {
    case "primary":
      colorClasses =
        intensity === "regular"
          ? "bg-blue-500"
          : intensity === "soft"
          ? "bg-blue-200"
          : "bg-blue-700";
      colorClassesHover =
        intensity === "regular"
          ? "hover:bg-blue-700"
          : intensity === "soft"
          ? "hover:bg-blue-300"
          : "hover:bg-blue-800";
      textColor =
        intensity === "regular"
          ? "text-white"
          : intensity === "soft"
          ? "text-blue-600 hover:text-white"
          : "text-white";
      break;
    case "secondary":
      colorClasses =
        intensity === "regular"
          ? "bg-violet-500"
          : intensity === "soft"
          ? "bg-violet-200"
          : "bg-violet-700";
      colorClassesHover =
        intensity === "regular"
          ? "hover:bg-violet-700"
          : intensity === "soft"
          ? "hover:bg-violet-300"
          : "hover:bg-violet-800";
      textColor =
        intensity === "regular"
          ? "text-white"
          : intensity === "soft"
          ? "text-violet-600 hover:text-violet-100"
          : "text-white";
      break;
    case "success":
      colorClasses =
        intensity === "regular"
          ? "bg-green-500"
          : intensity === "soft"
          ? "bg-green-200"
          : "bg-green-700";
      colorClassesHover =
        intensity === "regular"
          ? "hover:bg-green-700"
          : intensity === "soft"
          ? "hover:bg-green-400"
          : "hover:bg-green-800";
      textColor =
        intensity === "regular"
          ? "text-white"
          : intensity === "soft"
          ? "text-green-600 hover:text-green-100"
          : "text-white";
      break;
    case "error":
      colorClasses =
        intensity === "regular"
          ? "bg-red-500"
          : intensity === "soft"
          ? "bg-red-200"
          : "bg-red-700";
      colorClassesHover =
        intensity === "regular"
          ? "hover:bg-red-700"
          : intensity === "soft"
          ? "hover:bg-red-400"
          : "hover:bg-red-800";
      textColor =
        intensity === "regular"
          ? "text-white"
          : intensity === "soft"
          ? "text-red-600 hover:text-white"
          : "text-white";
      break;
    case "warning":
      colorClasses =
        intensity === "regular"
          ? "bg-yellow-500"
          : intensity === "soft"
          ? "bg-yellow-100"
          : "bg-yellow-700";
      colorClassesHover =
        intensity === "regular"
          ? "hover:bg-yellow-600"
          : intensity === "soft"
          ? "hover:bg-yellow-200"
          : "hover:bg-yellow-800";
      textColor =
        intensity === "regular"
          ? "text-white"
          : intensity === "soft"
          ? "text-yellow-500"
          : "text-white";
      break;
    case "dark":
      colorClasses =
        intensity === "regular"
          ? "bg-gray-700"
          : intensity === "soft"
          ? "bg-gray-500"
          : "bg-gray-800";
      colorClassesHover =
        intensity === "regular"
          ? "hover:bg-gray-800"
          : intensity === "soft"
          ? "hover:bg-gray-600"
          : "hover:bg-gray-600";
      textColor =
        intensity === "regular"
          ? "text-white"
          : intensity === "soft"
          ? "text-white"
          : "text-white";
      break;
    case "light":
      colorClasses =
        intensity === "regular"
          ? "bg-gray-200"
          : intensity === "soft"
          ? "bg-gray-100"
          : "bg-gray-300";
      colorClassesHover =
        intensity === "regular"
          ? "hover:bg-gray-300"
          : intensity === "soft"
          ? "hover:bg-gray-200"
          : "hover:bg-gray-400";
      textColor =
        intensity === "regular"
          ? "text-gray-500"
          : intensity === "soft"
          ? "text-gray-400"
          : "text-gray-500 hover:text-white";
      break;
    default:
      colorClasses =
        intensity === "regular"
          ? "bg-blue-500"
          : intensity === "soft"
          ? "bg-blue-200"
          : "bg-blue-700";
      colorClassesHover =
        intensity === "regular"
          ? "hover:bg-blue-700"
          : intensity === "soft"
          ? "hover:bg-blue-500"
          : "hover:bg-blue-800";
      textColor =
        intensity === "regular"
          ? "text-white"
          : intensity === "soft"
          ? "text-blue-600 hover:text-white"
          : "text-white";
      break;
  }

  return (
    <button
      className={`flex items-center justify-center gap-2 ${colorClasses} ${colorClassesHover} ${sizeClasses} rounded-md ${textColor}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
