// src/components/ui/badge.jsx
import React from "react";
import clsx from "clsx";

const variantStyles = {
  default: "bg-gray-100 text-gray-800",
  secondary: "bg-blue-100 text-blue-800",
  outline: "border border-gray-300 text-gray-800",
};

export const Badge = ({ children, variant = "default", className = "" }) => {
  return (
    <span
      className={clsx(
        "inline-block px-2 py-1 text-xs font-medium rounded-md",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
