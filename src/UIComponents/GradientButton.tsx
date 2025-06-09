interface GradientButtonProps {
  text: string;
  type?: any;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  paddingX?: string; // Example: "px-4"
  paddingY?: string; // Example: "py-2"
  width?: string; // Example: "w-40"
  fontSize?: string; // Example: "text-lg"
  fontWeight?: string; // Example: "font-bold"
  Icon?: React.ElementType;
}

export default function GradientButton({
  type,
  disabled,
  text,
  onClick,
  className,
  paddingX = "px-4",
  paddingY = "py-2",
  width,
  fontSize,
  fontWeight,
  Icon, // This is now optional
}: GradientButtonProps) {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`group rounded-full bg-gradient-primary
     text-white
  duration-300 ease-in-out
 ${Icon?"flex items-center gap-2":""}
  ${paddingX} ${paddingY} ${width} ${fontSize} ${fontWeight} ${className}`}
    >
      {text}
      {Icon && <Icon size={20} className="text-white dark:text-white" />}
    </button>
  );
}
