import React from "react";

interface GradientCardProps {
  width?: string; // Example: "w-64"
  height?: string; // Example: "h-40"
  text?: string; // Example: "All Participants"
  count?: string; // Example: "3232+"
  Icon: React.ElementType; // Example: User from lucide-react
  contentAlignment:string;
  textColor?: string; 
}

export default function GradientCard({
  width = "w-64",
  height = "h-40",
  text,
  count,
  Icon,
  contentAlignment,
  textColor
}: GradientCardProps) {
  return (
    <div className={`relative p-[1px] rounded-xl bg-[#D3C5E5] ${width} ${height}`}>
      <div className={`flex flex-col ${contentAlignment} bg-white rounded-xl h-full w-full p-6`}>
        <Icon size={32} className="text-[#01D3FF]" />
        <p className="text-black dark:text-white text-md mt-2 ">{text}</p>
        <p className={`${textColor} text-3xl font-bold`}>{count}</p>
      </div>
    </div>
  );
}
