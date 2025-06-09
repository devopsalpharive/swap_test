import React from "react";

interface InputFieldProps {
  width?: string;
  height?: string;
  bgColor?: string;
  padding?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  width = "w-full",
  height = "h-10",
  bgColor = "bg-[#07071A26]",
  padding = "p-2",
  placeholder = "Enter text...",
  value = "",
  onChange = () => {},
}) => {
  return (
    <input
      type="text"
      className={`${width} ${height} ${bgColor} ${padding} text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
