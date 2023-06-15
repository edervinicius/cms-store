import React, { FC } from "react";

interface IAlertProps {
  type:
    | "light"
    | "success"
    | "warning"
    | "error"
    | "info"
    | "dark"
    | "primary"
    | "secondary";
  message: any;
}

export const Alert: FC<IAlertProps> = ({ type, message }) => {
  let backgroundColor = "";
  let textColor = "";

  switch (type) {
    case "light":
      backgroundColor = "bg-gray-200";
      textColor = "text-gray-600";
      break;
    case "success":
      backgroundColor = "bg-green-500";
      textColor = "text-white";
      break;
    case "warning":
      backgroundColor = "bg-yellow-500";
      textColor = "text-yellow-800";
      break;
    case "error":
      backgroundColor = "bg-red-500";
      textColor = "text-white";
      break;
    case "info":
      backgroundColor = "bg-blue-500";
      textColor = "text-white";
      break;
    case "dark":
      backgroundColor = "bg-gray-800";
      textColor = "text-white";
      break;
    case "primary":
      backgroundColor = "bg-indigo-500";
      textColor = "text-white";
      break;
    case "secondary":
      backgroundColor = "bg-violet-500";
      textColor = "text-white";
      break;
    default:
      backgroundColor = "bg-blue-500";
      textColor = "text-white";
      break;
  }

  return (
    <div className={`py-6 px-6 rounded-lg ${backgroundColor} ${textColor}`}>
      {message}
    </div>
  );
};
