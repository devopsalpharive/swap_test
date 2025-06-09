// components/HowItWorks.tsx
import React from 'react';
const steps = [
  {
    number: "Step 1",
    title: "Connect Your Wallet",
    description:
      "Securely connect MetaMask, WalletConnect, or your favorite DeFi wallet.",
  },
  {
    number: "Step 2",
    title: "Select Tokens",
    description:
      "Choose the token you want to swap and what you want to receive.",
  },
  {
    number: "Step 3",
    title: "Swap Instantly",
    description:
      "Hit “Swap” and let ALPHA SWAP handle the rest. Your new tokens appear in seconds.",
  },
];
const HowItWorks: React.FC = () => {

  return (
    <>
    <div className='container px-4'>
    <div className="text-white ">

      <h2 className="md:text-[50px] text-[30px] font-semibold lg:mb-10 mb-4 font-funnel">
        <span className="text-3xl font-bold text-transparent bg-clip-text bg-linear-gradient">How It Works:</span>{' '}
        <span className="text-white">3 Easy Steps</span>
      </h2>

      <div className="grid lg:grid-cols-3 gap-10 relative">
      {steps.map((step, index) => (
        <div key={index} className="relative">
          {/* Step Label */}
          <div className="relative inline-block text-[32px] font-bold leading-none step-container bg-[linear-gradient(178.24deg,rgba(255,255,255,0.6)_12.77%,rgba(255,255,255,0)_79.12%)] bg-clip-text text-transparent">
            {step.number}
            </div>

          {/* Title & Description */}
          <h3 className="text-white font-bold lg:text-[32px] text-[20px] mb-2 mt-4 lg:mt-6">{step.title}</h3>
          <p className="text-sm text-white">{step.description}</p>

          {/* Divider (except last step) */}
          {index < steps.length - 1 && (
            <div className="hidden lg:block absolute top-5 right-0 w-[70%] border-t border-gradient-white">
              <span className="absolute -right-2 -top-1.5 w-3 h-3 rounded-full bg-white"></span>
            </div>
          )}
               <div className="block lg:hidden absolute top-5 right-0 w-[60%] border-t border-gradient-white">
              <span className="absolute -right-2 -top-1.5 w-3 h-3 rounded-full bg-white"></span>
            </div>
        </div>
      ))}
    </div>
    </div>
    </div>
    </>
  );
};

export default HowItWorks;
