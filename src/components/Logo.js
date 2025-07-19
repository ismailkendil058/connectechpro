import React from 'react';

const Logo = ({ className = "", size = "default" }) => {
  const sizeClasses = {
    small: "text-lg",
    default: "text-xl", 
    large: "text-2xl",
    xlarge: "text-3xl"
  };

  return (
    <div className={`font-bold tracking-tight ${sizeClasses[size]} ${className}`}>
      <span className="text-red-600">C</span>
      <span className="text-gray-700">onnecte</span>
      <span className="text-red-600">t</span>
      <span className="text-gray-700">ch</span>
      <span className="text-gray-700 text-xs align-sub ml-1">™</span>
      <span className="text-gray-700 ml-2 font-semibold">Pro</span>
    </div>
  );
};

export default Logo; 