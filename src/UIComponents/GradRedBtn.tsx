// import React from "react";

interface GradRedBtnProps {
  text: string;
  onClick?: () => void;
  className?: string;
  paddingX?: string; // Example: "px-4"
  paddingY?: string; // Example: "py-2"
  width?: string; // Example: "w-40"
  fontSize?: string; // Example: "text-lg"
  fontWeight?: string; // Example: "font-bold"
}

export default function GradRedBtn({
  text,
  onClick,
  className,
  paddingX,
  paddingY,
  width,
  fontSize,
  fontWeight,
}: GradRedBtnProps) {
  return (
<button
  onClick={onClick}
  className={`group rounded-full 
  bg-gradient-to-r from-[#b5292b] to-[#de3e44] text-white
  duration-300 ease-in-out
  hover:-translate-y-2
 hover:shadow-[0_2px_20px_0_#ffa4a7] 
  ${paddingX} ${paddingY} ${width} ${fontSize} ${fontWeight} ${className}`}
>

  {text}
</button>

  );
}
