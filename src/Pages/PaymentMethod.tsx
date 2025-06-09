import React ,{ useState } from "react";
import GradientButton from "../UIComponents/GradientButton";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import Layer2 from "../assets/images/Layer2.png"
const PaymentMethod = () => {

    const [isOpen, setIsOpen] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
      // useEffect(() => {
      //   if (isOpen || showTerms) {
      //     document.body.style.overflow = "hidden";
      //   } else {
      //     document.body.style.overflow = "auto"; 
      //   }
      // }, [isOpen, showTerms]);

  return (
    <div className="mt-11 md:mt-auto">
        <Link to='/p2p'>
            <img src={Layer2} className="dark:invert mb-10"/>
        </Link>
      <div className="flex justify-between flex-wrap gap-2">
        <h1 className="dark:text-white font-funnel text-[30px]">
          Payment Methods
        </h1>
        <GradientButton  onClick={() => setIsOpen(true)}
          text={"Add a Payment Method"}
          className="rounded-lg font-bold py-1 px-6"
        />


      </div>
      <p className="dark:text-white font-funnel mt-8">
        P2P payment methods: When you sell cryptocurrencies, the payment method
        added will be displayed to buyer as options to accept payment, please
        ensure that the account owner’s name is consistent with your verified
        name on Panther exchange crypto. You can add up to 20 payment methods.
      </p>
      <div className="relative bg-[linear-gradient(132.9deg,_#DADADA_9.82%,_rgba(218,218,218,0.07)_49.06%,_#DADADA_103.78%)] p-[1.02px] rounded-lg mt-10">
        <div className="dark:bg-black bg-white rounded-lg xh-full w-full">
            <div className="flex justify-between p-4 bg-gradient-primary rounded-t-lg text-white ">
                <p>Bank</p>
                <div className="flex gap-3">
                    <Link to="">Edit</Link>
                    <Link to="">Delete</Link>
                </div>
            </div>
            <div className="flex justify-between p-4 pb-6 flex-wrap gap-5 dark:text-white">
                <div>
                    <h4>Account Holder Name</h4>
                    <p>Priya</p>
                </div>
                <div>
                    <h4>Account Number</h4>
                    <p>95864122897463</p>
                </div>
                <div>
                    <h4>QR Image</h4>
                    <p>Priya</p>
                </div>
            </div>
        </div>
      </div>
      <div className="relative bg-[linear-gradient(132.9deg,_#DADADA_9.82%,_rgba(218,218,218,0.07)_49.06%,_#DADADA_103.78%)] p-[1.02px] rounded-lg mt-10">
        <div className="dark:bg-black bg-white  rounded-lg xh-full w-full">
            <div className="flex justify-between p-4 bg-gradient-primary rounded-t-lg text-white">
                <p>Bank</p>
                <div className="flex gap-3">
                    <Link to="">Edit</Link>
                    <Link to="">Delete</Link>
                </div>
            </div>
            <div className="flex justify-between p-4 pb-6 flex-wrap gap-5 dark:text-white">
                <div>
                    <h4>Account Holder Name</h4>
                    <p>Priya</p>
                </div>
                <div>
                    <h4>Account Number</h4>
                    <p>95864122897463</p>
                </div>
                <div>
                    <h4>QR Image</h4>
                    <p>Priya</p>
                </div>
            </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="mx-2 bg-[linear-gradient(132.9deg,_#DADADA_9.82%,_rgba(218,218,218,0.07)_49.06%,_#DADADA_103.78%)] p-[1.02px] rounded-xl">
          <div className="dark:bg-black bg-white dark:text-white rounded-xl h-full md:w-[500px] w-auto  p-6 rounded-xl w-[500px] relative shadow-lg">
            <button
              className="absolute top-3 right-3 text-orange-400 hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
            <h2 className="text-xl font-bold text-center mb-10 text-[18px] text-[#FFB22C]">Select Payment Methods</h2>

            <div className="mt-4">
              <p className="font-semibold">Recommended</p>
              <div className="flex items-center justify-between space-x-4 mt-4">
                <Link to='/bank-payment' className="font-bold dark:text-gray-300 cursor-pointer">BANK TRANSFER</Link>
                <span className="text-gray-400">|</span>
                <Link to='/upi' className="font-bold dark:text-gray-300 cursor-pointer ">UPI</Link>
                <span className="text-gray-400">|</span>
                <Link to='/gpay' className="font-bold dark:text-gray-300 cursor-pointer">GPAY</Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;
