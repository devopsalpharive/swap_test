import React from "react";

interface GradientButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  paddingX?: string; // Horizontal padding
  paddingY?: string; // Vertical padding
  width?: string; // Width (e.g., w-full, w-40)
  fontSize?: string; // Font size (e.g., text-sm, text-lg)
}

export default function BlueButton({
  text,
  onClick,
  className = "",
  paddingX = "px-6",
  paddingY = "py-3",
  width = "w-auto",
  fontSize = "text-lg",
}: GradientButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg font-bold text-white 
      bg-[#2F2F8A99]
      hover:opacity-80 transition-all duration-300 ease-in-out 
      ${paddingX} ${paddingY} ${width} ${fontSize} ${className}`}
    >
      {text}
    </button>
  );
}
