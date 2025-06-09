import React from "react";
import forex from "../assets/images/Rectangle1.png";
import { Link } from "react-router-dom";

const Crypto = () => {
  return (
    <div className="">
      <div
        className="pt-10 px-6 xs:px-2 pb-10 relative rounded-3xl    sm:bg-gradient-to-r from-[#66b1e633] to-[#2954a333] sm:border border-[#2954A3] shadow-[0px_10px_20px_0px_rgba(7,7,26,0.15)]"
        // style={{
        //   background:
        //     "linear-gradient(105.95deg, rgba(102, 177, 230, 0.2) 24.79%, rgba(41, 84, 163, 0.2) 71.87%)",
        //   border: "1px solid #2954A3",
        //   boxShadow: "0px 10.01px 20.03px 0px #07071A26",
        // }}
      >
        <div className="">
          <div className=" items-center mb-4 even:bg-gray-100 p-4  even:rounded-lg flex-wrap dark:even:bg-cardBgDark">
            <div className="relative w-full">
              <img
                src={forex}
                alt="Background"
                className="xs:hidden xTTs:hidden xTs:hidden xs:mb-6 xs:mt-[-20px]"
              />

              {/* Content Section */}
              <div
                className="
    flex flex-col items-start justify-start w-1/2 xs:static sm:mt-4 sm:static md:absolute lg:absolute  md:top-4 md:left-8 lg:top-1/4 sm:top-0 sm:left-0 md:max-w-[450px] lg:max-w-[500px] sm:max-w-full  xs:w-full xTs:w-full xTTs:w-full xTTs:px-4 xTTs:py-3 xTTs:rounded-lg lg:border-none lg:shadow-none lg:backdrop-blur-none lg:bg-none md:bg-none   md:border-none md:shadow-none md:backdrop-blur-none border border-[#2954A3] shadow-[0px_10px_20px_0px_rgba(7,7,26,0.15)] backdrop-blur-lg bg-[linear-gradient(105.95deg,_rgba(102,177,230,0.2)_24.79%,_rgba(41,84,163,0.2)_71.87%)] xTs:rounded-lg xTs:p-4 xs:rounded-lg xs:p-4 xs:text-black tTl:top-3
  "
              >
                <p className="text-[24px] xTTs:w-full mt-2  xTs:text-black xTs:dark:text-white xTTs:text-black xTTs:dark:text-white sm:text-gray-400 xs:dark:text-white xs:text-black lg:text-white md:text-[25px] sm:text-[24px] xs:text-[21px] sm:mt-2 xs:mt-2">
                  Embrace the future with Cryptocurrencies
                </p>

                <p className="xs:text-gray-400 xTs:text-gray-400 sm:text-gray-400 lg:text-white md:text-[14px] xs:text-[14px] sm:text-[14px] mb-4 font-medium mt-2">
                  Buy & sell CFDs on Bitcoin, Ethereum, and 60+ other
                  Cryptocurrencies at your fingertips.
                </p>

                <Link
                  to="/"
                  className=" md:text-[14px] sm:text-[14px] text-[#07bef0]"
                >
                  Start Trading
                </Link>
              </div>
            </div>

            <div className="login-part">
              <h5 className=" dark:text-white xs:text-[21px] sm:text-[24px] md:text-[25px]  mt-7 mb-3 text-[30px]">
                Online trading made simpler
              </h5>
              <p className="dark:text-white xs:text-[14px] sm:text-[14px] mb-6 text-[16px]">
                Stakonomics is a highly sought-after cryptocurrency trading
                platform. Our cryptocurrency tools and services help you in
                jump-starting with cryptocurrency trading in no time, and side
                by side helps you to gain great insights into the cryptocurrency
                trading market.
              </p>
              <p className="dark:text-white xs:text-[14px] sm:text-[14px] mb-6 text-[16px]">
                Cryptocurrency is the new-age digital currency that is backed by
                blockchain technology. It represents money on the digital ledger
                with a lot more advanced features that have revolutionized the
                traditional financial industry and many other segments of
                society.
              </p>
              <p className="dark:text-white xs:text-[14px] sm:text-[14px] mb-6 text-[16px]">
                The presence of elements such as cryptography, end-to-end
                encryption, time-stamped transparent transactions that are
                almost instant, all these qualities make the trading of the
                cryptocurrency a very sought-after market. Further, the fact
                that cryptocurrency is decentralized in nature, brings a lot of
                flexibility and freedom from central banks and governments to
                the traders and investors of the cryptocurrency. When all such
                qualities of cryptocurrency are guided by the expert team of
                Stakonomics, the trader is in for sure benefits.
              </p>
              <p className="dark:text-white xs:text-[14px] sm:text-[14px] mb-6 text-[16px]">
                At Stakonomics, we offer you leveraged cryptocurrency trading
                which allows the user to gauge the possible future changes in
                the value of cryptocurrency. The user can enjoy cryptocurrency
                trading, without having to own any cryptocurrency at
                Stakonomics. Further, the leveraged cryptocurrency helps you to
                steer away from security risks which usually affect when one
                trades cryptocurrency on any crypto exchange. Given the user can
                peek into the possible future tides in the pricing of various
                cryptocurrencies in the market, the user can make smart advanced
                decisions, advance profit booking, and can expect higher rewards
                too.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crypto;
