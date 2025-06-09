import React, { useState } from "react";

type Token = {
  name: string;
  icon: string;
};

type Props = {
  tokens: Token[];
  selectedToken: Token;
  onChange: (token: Token) => void;
};

const SelectComponent: React.FC<Props> = ({
  tokens,
  selectedToken,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (token: Token) => {
    onChange(token);
    setIsOpen(false);
  };

  return (
    <div className="relative text-white">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center bg-gray-800 px-2 py-1 rounded-md w-28 justify-between text-sm"
      >
        <div className="flex items-center gap-2">
          <img src={selectedToken.icon} alt={selectedToken.name} className="w-4 h-4" />
          {selectedToken.name}
        </div>
        <span className="ml-2">▼</span>
      </button>

      {isOpen && (
        <ul className="absolute z-50 mt-1 w-28 bg-gray-900 rounded-md shadow-lg">
          {tokens.map((token) => (
            <li
              key={token.name}
              onClick={() => handleSelect(token)}
              className="flex items-center px-2 py-1 hover:bg-gray-700 cursor-pointer text-sm"
            >
              <img src={token.icon} alt={token.name} className="w-4 h-4 mr-2" />
              {token.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectComponent;
