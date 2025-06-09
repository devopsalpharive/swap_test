import React, { useState } from "react";
import { CircleArrowDown, CircleArrowRight } from "lucide-react";
import img from "../../assets/images/alphaswapSteps.png"
import imgDark from "../../assets/images/alphaswapStepsDark.png";


const steps = [
  {
    title: "Create your account",
    description:
      "Faucibus id a fusce elementum pellentesque maecenas nec odio maecenas sed vitae et consectetur ut nullam lectus lectus sed morbi.",
  },
  {
    title: "Create your wallet",
    description:
      "Faucibus id a fusce elementum pellentesque maecenas nec odio maecenas sed vitae et consectetur ut nullam lectus lectus sed morbi.",
  },
  {
    title: "Buy & trade crypto",
    description:
      "Faucibus id a fusce elementum pellentesque maecenas nec odio maecenas sed vitae et consectetur ut nullam lectus lectus sed morbi.",
  },
];

const alphaswapSteps: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="py-20 bg-white dark:bg-[#121517] text-center text-black dark:text-white">
      <h2 className="text-[30px] md:text-[50px] font-bold leading-tight ">
        Learn how does
      </h2>
      <h3 className="text-[30px] md:text-[50px] font-bold leading-tight">
        alphaswap work
      </h3>
      <p className="text-gray-400 max-w-xl mx-auto mt-1">
        Lorem ipsum dolor sit amet consectetur convallis nam luctus nisl in
        purus quis dictumst quisque sed ornare sit nisi neque diam sed nullam
        dictum gravida.
      </p>

      <div className="mt-14 bg-green-50 dark:bg-[#121517] border border-green-200 rounded-xl p-8 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={img}
            alt="Phone"
            className="max-w-[380px] block dark:hidden"
          />
          <img
            src={imgDark}
            alt="Phone"
            className="max-w-[380px] hidden dark:block"
          />
        </div>

        <div className="w-full lg:w-1/2 text-left space-y-8">
          {steps.map((step, index) => (
            <div key={index}>
              <div
                onClick={() => setActiveStep(index)}
                className="flex justify-between items-center cursor-pointer group"
              >
                <h4 className="text-[18px] font-semibold ">{step.title}</h4>
                {activeStep === index ? (
                  <CircleArrowDown />
                ) : (
                  <CircleArrowRight className="group-hover:translate-x-1 transition-transform" />
                )}
              </div>
              {activeStep === index && step.description && (
                <p className="mt-2 text-sm text-gray-400">{step.description}</p>
              )}
              {index !== 2 && (
                <div className="border-t border-gray-200 mt-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default alphaswapSteps;
