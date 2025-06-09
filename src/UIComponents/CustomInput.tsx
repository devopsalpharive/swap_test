import React from "react";

interface CustomInputProps {
  type?: string;
  name: string;
  placeholder: string;
  disabled?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void; // Add this
  pattern?: string; // Optional pattern prop
}

const CustomInput: React.FC<CustomInputProps> = ({
  type = "text",
  disabled,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="bg-gradient-primary rounded-lg p-[1px] mt-2">
      <input
        type={type}
        name={name}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-white dark:bg-[#23262F] rounded-lg w-full p-2.5 outline-none dark:text-white placeholder-gray-400  [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
    </div>
  );
};

export default CustomInput;
