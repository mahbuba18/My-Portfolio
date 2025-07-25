// src/components/ui/button.jsx
import React from "react";
import clsx from "clsx";

const variants = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  outline: "border border-gray-400 text-gray-800 hover:bg-gray-100",
};

export const Button = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  asChild = false,
  ...props
}) => {
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  const classes = clsx(
    "inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200",
    variants[variant],
    sizes[size],
    className
  );

  const Component = asChild ? "span" : "button";

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};
