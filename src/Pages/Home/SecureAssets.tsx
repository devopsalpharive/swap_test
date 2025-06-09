import React from "react";
import Secure1 from "../../assets/images/secure-1.svg";
import Secure2 from "../../assets/images/secure-2.svg";
import Secure3 from "../../assets/images/secure-3.svg";

const features = [
  {
    icon:Secure1,
    title: "Compliance Matrix",
    description:
      "A global digital services financial institution with branch offices in Canada, the EU, and Australia. Regulated business and services in countries where it operates.",
    highlight: true,
  },
  {
    icon: Secure2,
    title: "2FA Authentication",
    description:
      "Robust identity verification, compliance and Know Your Customer (KYC) with Sumsub as a partner. Auto-detection of cybercrime-related risks with advanced AI technology.",
  },
  {
    icon: Secure3,
    title: "Transparency",
    description:
      "100% Proof-of-Reserves with top cybersecurity organizations as partners. Security audit approved by the leading security-focused ranking platform alphaswap.",
  },
];

const SecureAssets: React.FC = () => {
  return (
    <section className="py-16 pt-10 px-4 text-center bg-white dark:bg-[#121517]">
      <h2 className="text-[30px] md:text-[50px] font-bold leading-tight mb-4 text-black dark:text-white">
        Secure Your Assets
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-12">
        Lorem ipsum dolor sit amet consectetur convallis nam luctus nisl in
        purus quis dictumst quisque sed ornare sit nisi neque diam sed nullam
        dictum gravida.
      </p>

      <div className="grid gap-8 md:grid-cols-3 mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`rounded-2xl p-10 shadow-md border transition hover:shadow-lg hover:border-green-400 hover:shadow-green-100`}
          >
            <div className="mb-4 text-center">
              <img src={feature.icon} alt={feature.title} className="inline"/>
             </div>
            <h3 className="font-semibold text-lg mb-2 mt-11 text-black dark:text-white">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecureAssets;
