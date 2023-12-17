import React, { FC, ReactNode } from "react";
import "./Button.css";

type ButtonProps = {
  type: "primary" | "default" | "dashed" | "text" | "link";
  onClick?: () => void;
  children: ReactNode;
};

const Button: FC<ButtonProps> = ({ type, onClick, children }) => {
  const getButtonClassName = (): string => {
    switch (type) {
      case "primary":
        return "primary-button";
      case "dashed":
        return "dashed-button";
      case "text":
        return "text-button";
      case "link":
        return "link-button";
      default:
        return "default-button";
    }
  };

  return (
    <button
      className={`custom-button ${getButtonClassName()}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
