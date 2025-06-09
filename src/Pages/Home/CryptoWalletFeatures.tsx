import React from "react";
import img from "../../../src/assets/images/BuildInWallet1.png"
import { Chart, CircleDiamond, Refresh } from "../../SVGComponents";
import { ArrowRight } from "lucide-react";
const CryptoWalletFeatures = () => {
  return (
    <div className="  text-black dark:text-white py-16 px-4]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-[30px] md:text-[50px] font-bold leading-tight">
          Fully featured to buy, <br className="hidden md:block" />
          trade and invest in crypto
        </h1>
        <p className="text-gray-400 mt-4">
          Lorem ipsum dolor sit amet consectetur neque maecenas nec est maecenas
          ornare orci a semper egestas massa interdum ut vestibulum ipsum velit.
        </p>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center gap-16">
        {/* Left Section - Image and Chart */}
        <div className="relative lg:w-2/5">
          {/* <div className="bg-gradient-to-br from-[#0F9B8E] to-[#064A3C] rounded-3xl p-6 w-[320px] md:w-[400px]">
            <h2 className="text-xl font-semibold mb-2">Built-in wallet</h2>
            <p className="text-gray-400 text-sm mb-6">
              Malesuada elementum lacinia quisque morbi pharetra eu scelerisque
              id morbi. In aliquet nunc dui ut eu eget mattis.
            </p>
            <div className="bg-black rounded-2xl p-4 text-center">
              <p className="text-sm text-gray-400 mb-2">Verification</p>
              <div className="w-12 h-12 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold">✓</span>
              </div>
              <p>Enter the verification code</p>
              <p className="text-xs text-gray-400 mt-2">
                The code was sent to your mobile phone ending with 3702
              </p>
              <div className="flex justify-between mt-4 space-x-1">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-8 h-10 bg-[#1A1A1A] rounded-md" />
                ))}
              </div>
            </div>
          </div> */}
          <div className="">
            <img
              src={img}
              alt=""
              className=""
            />
          </div>

          {/* <div className="absolute flex justify-between -left-[180px] bottom-[100px] bg-white dark:bg-[#1A1A1A] p-4 rounded-2xl w-60 shadow-md">
            <div>
              <div></div>
              <div className="text-sm font-semibold mb-1">Latinpro</div>
              <div className="text-green-400 text-[12px]">+27.50%</div>
              <div className="text-[12px] text-gray-400">7083 Copiers</div>
            </div>
            <div className="flex justify-start items-end ml-5">
              <div></div>
              <div></div>

              <button className="ml-auto mt-2 text-[12px] text-sm text-black dark:text-white bg-gray-300 px-3 py-1 rounded-3xl">
                Copy
              </button>
            </div>
          </div> */}
          
        </div>

        {/* Right Section - Features */}
        <div className="flex-1 w-full lg:w-1/5">
          {[
            {
              title: "Send & receive anytime",
              desc: "Pellentesque ut mus tincidunt pharellus cras proin tincidunt. Ut nisl mollis nulla commodo.",
            },
            {
              title: "View charts & reports",
              desc: "Pellentesque ut mus tincidunt pharellus cras proin tincidunt. Ut nisl mollis nulla commodo.",
            },
            {
              title: "Earn passively",
              desc: "Pellentesque ut mus tincidunt pharellus cras proin tincidunt. Ut nisl mollis nulla commodo.",
            },
          ].map((item, index) => (
            <>
              <div key={index} className="p-5" style={{ marginTop:"0px !important" }}>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <span className="text-green-400">
                    {index === 0 ? (
                      <Refresh />
                    ) : index === 1 ? (
                      <Chart />
                    ) : (
                      <CircleDiamond />
                    )}
                  </span>
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1 py-4">{item.desc}</p>
                <a href="#" className="text-sm text-white mt-1 inline-block">
                  Learn more →
                </a>

                <div
                  style={{ height: "0.1px" }}
                   className="bg-gray-100 dark:bg-gray-700 mt-[25px]"
                ></div>
              </div>
            </>
          ))}
          
        </div>
      </div>

      <div className="flex justify-center text-center mt-16 flex-wrap gap-5">
        <button className="flex items-center bg-black dark:bg-white text-white  font-medium py-2 px-4 rounded-full mr-4">
          Download app{" "}
          <ArrowRight className="text-white  w-10 h-4" />
        </button>
        <button className="flex items-center bg-gray-800 text-white font-medium py-2 px-6 rounded-full">
          Browse all features
        </button>
      </div>
    </div>
  );
};

export default CryptoWalletFeatures;
