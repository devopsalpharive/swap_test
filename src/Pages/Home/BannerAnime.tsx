import React from "react";
import { motion } from "framer-motion";
import eth from "../../../public/eth.svg"
import bnb from "../../../public/bnb.svg"
import polygon from "../../../public/polygon.svg"
import avax from "../../../public/avax.svg"

// Coin Data
const coins = [
  { src: eth, top: "0px", left: "25%", width: "70px", height: "70px" },
  { src: avax, bottom: "20%", left: "3%" , width: "60px", height: "60px" },
  { src: bnb, right: "-5%", top: "50%" , width: "73px", height:"73px"   },
  { src: polygon, top: "15%", left: "55%", width: 56, height: 56  },
];

export default function BannerAnime() {
  return (
    <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] mx-auto top-[45px] md:left-[28px] left:0">
 <div className="absolute inset-0 rounded-full border-[16px] border-[#8f7f8fcc]">
        {/* Outer Rotating Ball */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute left-1/2 -translate-x-1/2 top-[-16px] w-4 h-4 bg-red-600 rounded-full shadow-lg "
  />
        </motion.div>
      </div>

      {/* Inner Circle */}
      <div className="absolute inset-[20%] rounded-full border-[12px] border-[#2b1628]">
        {/* Inner Rotating Ball (counter-clockwise) */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute left-1/2 -translate-x-1/2 top-[-10px] w-3 h-3 bg-red-500 rounded-full shadow" />
        </motion.div>
      </div>

      {/* Coins with subtle jump animation */}
      {coins.map((coin, index) => (
        <motion.img
          key={index}
          src={coin.src}
          alt={`coin-${index}`}
          className="absolute"
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            delay: index * 0.3,
            repeatType: "loop",
          }}
          style={{
            ...coin,
            width: coin.width,
            height: coin.height,
          }}
        />
      ))}
    </div>
  );
}
