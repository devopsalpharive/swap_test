import React from "react";
import Lottie from "lottie-react";
import animationData from "../../public/404.json"; // Adjust the path accordingly

const Lottie404: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-1/2">
        <Lottie animationData={animationData} loop={true} />
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mt-4">Page Not Found</h1>
      <p className="text-gray-600">Oops! The page you're looking for doesn't exist.</p>
    </div>
  );
};

export default Lottie404;
