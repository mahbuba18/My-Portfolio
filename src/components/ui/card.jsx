// src/components/ui/card.jsx
import React from "react";

export const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-gradient-to-r from-sky-400 via-emerald-400 to-green-500 hover:from-green-500 hover:to-sky-400  rounded-xl border shadow-sm ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children }) => {
  return <div className="p-4 border-b">{children}</div>;
};

export const CardTitle = ({ children, className = "" }) => {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
};

export const CardDescription = ({ children, className = "" }) => {
  return <p className={`text-sm text-gray-600 mt-1 ${className}`}>{children}</p>;
};

export const CardContent = ({ children }) => {
  return <div className="p-4">{children}</div>;
};
