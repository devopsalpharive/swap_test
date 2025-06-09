import React from "react";

interface GradientCardProps {
    Icon: React.ElementType;
    className?: string;
    onClick?: () => void; // Make onClick optional
    
}

export default function IconCard({ Icon, className, onClick }: GradientCardProps) {
    return (
        <div 
            className={`relative w-[32px] h-[32px] rounded-md p-[5px] 
                transition-all duration-300 hover:scale-110 hover:shadow-lg 
                ${className}`}
        >
            <div 
                className="flex items-center justify-center w-full h-full 
                 rounded-md 
                transition-all duration-300 hover:bg-opacity-90" 
                onClick={onClick} 
            >
                <Icon size={20} className="text-white transition-colors duration-300 hover:text-white" />
            </div>
        </div>
    );
}
