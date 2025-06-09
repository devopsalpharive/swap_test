import { WalletIcon } from "lucide-react";
// import React from "react";

interface GradientButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  paddingX?: string; // Example: "px-4"
  paddingY?: string; // Example: "py-2"
  width?: string; // Example: "w-40"
  fontSize?: string; // Example: "text-lg"
  fontWeight?: string; // Example: "font-bold"
}

export default function HeaderBtn({
  text,
  onClick,
  className = "",
  paddingX = "",
  paddingY = "",
  width = "",
  fontSize = "",
  fontWeight = "",
}: GradientButtonProps) {
  return (
<button
  onClick={onClick}
  className={`group relative overflow-hidden rounded-lg text-white 
  bg-[#D3C5E5] 
  hover:text-[#2954A3] duration-300 ease-in-out
  hover:shadow-[0_8px_20px_0_#00cdf94d] 
  ${paddingX} ${paddingY} ${width} ${fontSize} ${fontWeight} ${className}`}
>
  <span className="absolute inset-0 bg-white scale-0 group-hover:scale-100"></span>
  <div className="flex space-x-2 items-center justify-center">
  <WalletIcon size={20} className="relative z-10" />
  <span className="relative z-10">{text}</span>
  </div>
</button>

  );
}
