
interface GradientButtonProps {
  type?: any
  text: string;
  onClick?: () => void;
  className?: string;
  paddingX?: string; // Horizontal padding
  paddingY?: string; // Vertical padding
  width?: string; // Width
  fontSize?: string; // Font size
}

export default function WhiteBtn({
  type,
  text,
  onClick,
  className,
  // paddingX = "px-6",
  // paddingY = "py-3",
  width,
  fontSize,
}: GradientButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative p-[1.02px]  font-bold rounded-2xl bg-gradient-primary transition-all duration-300 ease-in-out ${className} ${width}`}
    >
      <span className={`block w-full rounded-2xl h-full px-6 py-2 bg-white dark:bg-black text-black dark:text-white  content-center text-center transition-all duration-300 ease-in-out hover:bg-gradient-primary hover:text-white  ${fontSize}`}>
        {text}
      </span>
    </button>



  );
}
