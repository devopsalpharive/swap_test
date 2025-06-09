import React from "react";

const CrystalSemiCircles: React.FC = () => {
  return (
    <div className="relative w-48 h-24">
      {/* Large Crystal Circle */}
      <div className="absolute w-full h-full rounded-t-full bg-gradient-to-r from-purple-700 via-pink-400 to-white opacity-80 backdrop-blur-2xl shadow-lg border border-white/30"></div>

      {/* Medium Crystal Circle */}
      <div className="absolute w-2/4 h-2/4 left-16 bottom-0 rounded-t-full bg-gradient-to-r from-blue-600 via-purple-400 to-white opacity-70 backdrop-blur-lg shadow-md border border-white/20"></div>

      {/* Smallest Crystal Circle */}
      <div className="absolute w-1/3 h-1/3 left-20 bottom-0 rounded-t-full bg-gradient-to-r from-indigo-500 via-blue-300 to-white opacity-60 backdrop-blur-md shadow-sm border border-white/10"></div>

      {/* Light Reflection Overlay */}
      <div className="absolute w-full h-full rounded-t-full bg-white/20 blur-lg"></div>
    </div>
  );
};

export default CrystalSemiCircles;
