import React from "react";

interface GradientButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  paddingX?: string; // Horizontal padding
  paddingY?: string; // Vertical padding
  width?: string; // Width
  fontSize?: string; // Font size
}

export default function TradeBtn({
  text,
  onClick,
  className,
  width,
  fontSize,
}: GradientButtonProps) {
  return (
<button
  onClick={onClick}
  className={`relative p-[1.6px] rounded-lg bg-[#D3C5E5] transition-all duration-300 ease-in-out ${className} ${width}`}
>
  <span className={`block w-full h-full px-6 py-2 rounded-md font-bold text-center transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#01D3FF] hover:to-[#2954A3] hover:text-white ${fontSize}`}>
    {text}
  </span>
</button>


  
  );
}
