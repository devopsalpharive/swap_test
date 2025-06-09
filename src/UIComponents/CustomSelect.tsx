import React from "react";

interface CustomSelectProps {
  name: string;
  value: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string }[];
  placeholder?: string;
  className?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  name,
  value,
  onChange,
  disabled,
  options,
  placeholder = "Select an option",
  className,
}) => {
  return (
    <div className="bg-gradient-primary rounded-lg p-[1px] mt-2">
      <select
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`bg-white dark:bg-[#23262F] rounded-lg w-full p-3 outline-none dark:text-white ${className}`}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
