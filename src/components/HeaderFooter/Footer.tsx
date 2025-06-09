import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { LogoDark } from "../../SVGComponents";
import GradientButton from "../../UIComponents/GradientButton";
import { Facebook, Instagram, Linkedin, Twitter } from "../SvgCollection";


const instruments = [
  { name: "Trade", path: "/spot" },
  { name: "P2P", path: "/p2p" },
  { name: "Stake", path: "/stake" },
  { name: "Market", path: "/market" },
];

const tradingLinks = [
  { name: "FAQ ?", path: "/" },
  { name: "Privacy Policy", path: "" },
  { name: "Terms & Conditions", path: "t" },
];

export default function Footer() {



  return (
    <footer className="dark:bg-black bg-white pb-10">
      {/* Footer Content (zIndex 1 or default) */}
      <div className="relative z-10 px-[140px] tTl:px-[80px] sTt:px-[60px] xTTs:px-[30px] xTs:px-[0px] xs:px-0 xs:pt-10 xTs:pt-10 xTTs:pt-10 sTt:pt-10 rounded-2xl">
        <div className="max-w-7xl mx-auto bg-black/5 backdrop-blur-md dark:bg-black/70 dark:backdrop-blur-lg text-black dark:text-white px-6 py-12 grid grid-cols-1 sm:grid-cols-2 gap-10 rounded-t-2xl justify-between">
          {/* Left Column */}
          <div className="space-y-4">
            <Link to="#" className="flex gap-2">
              <LogoDark />
              <div>
                <div className="text-[16px] font-semibold">Alpha Swap</div>
                <div className="text-[10px]">Powered By Alpharive</div>
              </div>
            </Link>
            <p className="text-sm max-w-xs">
              High level experience in web design and development knowledge,
              producing quality work.
            </p>
            <div className="flex gap-4 pt-2 items-center">
              <Link to="">
                <Facebook />
              </Link>
              <Link to="">
                <Twitter />
              </Link>
              <Link to="">
                <Instagram />
              </Link>
              <Link to="">
                <Linkedin />
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <div>${"0.004"}</div>
            <div>
              <GradientButton
                text="Buy Alpha"
                className="px-6 py-3 text-center hover:!-translate-y-0 !rounded-2xl"
                Icon={ArrowRight}
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        {/* <div className="max-w-7xl mx-auto w-full bg-white dark:bg-black dark:text-white text-center text-sm py-4 rounded-b-2xl ">
          Copyright @Exchange
        </div> */}
        <div className="relative">
          {/* Sharp Bend Gradient Line */}
          <div className="absolute bottom-0 left-0 w-full h-[20px] overflow-hidden pointer-events-none">
            <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="w-full h-full">
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ec4899" /> {/* pink-500 */}
                  <stop offset="50%" stopColor="#a855f7" /> {/* purple-500 */}
                  <stop offset="100%" stopColor="#6366f1" /> {/* indigo-500 */}
                </linearGradient>
              </defs>
              <path
                d="
        M 0 11
        L 30 10
        Q 34 3, 35 0
        L 65 0
        Q 66 3, 70 10
        L 100 11
        "
                fill="none"
                stroke="url(#grad)"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Content Box */}
          <div className="bg-black text-white p-6 rounded-2xl">
            {/* Your content here */}
            Copyright @Exchange
          </div>
        </div>






      </div>
    </footer>
  );
}
