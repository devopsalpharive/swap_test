// src/components/SelectToken.tsx
import { useState } from 'react';
import {  WBNB_ADDRESS, USDT_ADDRESS, TOKEN_ADDRESS } from '../utils/Contracts';

interface SelectTokenProps {
  label: string;
  selectedToken: string;
  onSelect: (token: string) => void;
}

const SelectToken = ({ label, selectedToken, onSelect }: SelectTokenProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const tokens = [
    { symbol: 'WBNB', address: WBNB_ADDRESS },
    { symbol: 'USDT', address: USDT_ADDRESS },
    { symbol: 'TOKEN', address: TOKEN_ADDRESS },
  ];

  return (
    <div className="relative">
      <label className="block mb-1">{label}</label>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-2 border rounded-lg text-left flex justify-between items-center"
      >
        {selectedToken ? 
          tokens.find(t => t.address === selectedToken)?.symbol || 'Select Token' : 
          'Select Token'}
        <span>▼</span>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border rounded-lg shadow-lg">
          {tokens.map((token) => (
            <div
              key={token.address}
              onClick={() => {
                onSelect(token.address);
                setIsOpen(false);
              }}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {token.symbol}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectToken;