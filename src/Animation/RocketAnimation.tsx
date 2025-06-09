import React from "react";
import { motion } from "framer-motion";
import { RocketRectangle, RocketLogo, RocketLogoCircle, RocketTail } from "../SVG/rocketSVGComponents";

const RocketAnimation: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-black overflow-hidden">
      {/* Clouds */}
      <motion.div
        className="absolute bottom-0 w-full h-32 bg-white opacity-70 rounded-full"
        animate={{ y: [0, -50, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      ></motion.div>
      
      {/* Rocket */}
      <motion.div
        className="relative flex flex-col items-center"
        initial={{ y: 100 }}
        animate={{ y: -500 }}
        transition={{ duration: 4, ease: "easeInOut" }}
      >
        {/* Rocket Body */}
        <RocketRectangle />
        <div className="absolute top-4">
          <RocketLogo />
        </div>
        
        {/* Rocket Tail Animation */}
        <motion.div
          className="absolute bottom-[-20px]"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 0.3 }}
        >
          <RocketTail />
        </motion.div>
      </motion.div>

      {/* Rotating Stars */}
      <motion.div
        className="absolute top-10 left-20"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
      >
        <RocketLogoCircle />
      </motion.div>
      
      <motion.div
        className="absolute top-20 right-20"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
      >
        <RocketLogoCircle />
      </motion.div>
    </div>
  );
};

export default RocketAnimation;