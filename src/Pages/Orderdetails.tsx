import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import GradientButton from "../UIComponents/GradientButton";
import { Send } from "lucide-react";
import Layer2 from "../assets/images/Layer2.png";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
const Orderdetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [uploadedImage1, setUploadedImage1] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };
  const handleFileUpload1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage1(imageUrl);
    }
  };
  const [messages, setMessages] = useState<
    { text: string; sender: "user"; time: string }[]
  >([]);
  const [input, setInput] = useState("");

  // /time/ /
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // sending message
  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      { text: input, sender: "user", time: getCurrentTime() },
    ]);
    setInput("");
  };

        useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto"; 
        }
      }, [isOpen]);

  return (
    <div className="mt-11 md:mt-auto">
      <Link to="/p2p">
        <img src={Layer2} className="dark:invert mb-10" />
      </Link>
      <div className="flex justify-between mb-11 flex-wrap gap-5 dark:text-white text-black relative bg-[linear-gradient(132.9deg,_#DADADA_9.82%,_rgba(218,218,218,0.07)_49.06%,_#DADADA_103.78%)] p-[1.02px] rounded-lg">
      <div className="flex flex-col dark:bg-black bg-gray-200 dark:text-white rounded-xl h-full w-full p-4">
        <h3 className="text-[20px] font-bold">Order Confirmed</h3>
        <p className="text-[18px]">
          Order Number: <span>TXN1743664954698_2280</span>
        </p>
        </div>
      </div>
      <div className="dark:text-white rounded-lg sm:gap-5 grid grid-cols-12 gap-4">
        <div className="relative pl-6 col-span-12 lg:col-span-7">
          <div className="absolute left-[34px] top-0 w-1 h-full bg-themeYellow "></div>

          {/* Step 1 - Confirm Order Info */}
          <div className="relative flex items-start space-x-4 mb-8">
            <CheckCircle className="text-themeYellow  w-6 h-6 z-10 dark:bg-gray-900 bg-white" />
            <div>
              <h3 className="text-lg font-semibold">Confirm Order Info</h3>
              <p className="text-gray-400">Amount: 1 USDT</p>
            </div>
          </div>

          {/* Step 2 - Bank Details */}
          <div className="relative flex items-start space-x-4 mb-8">
            <CheckCircle className="text-themeYellow  w-6 h-6 z-10 dark:bg-gray-900 bg-white" />
            <div>
              <h3 className="text-lg font-semibold">Bank Details</h3>
              <div className="dark:bg-black p-4 rounded-lg mt-4 bg-gray-200">
                <p>
                  <span className="font-bold text-[15px]">Name:</span> test
                </p>
                <p>
                  <span className="font-bold text-[15px]">ACCOUNT NO:</span>{" "}
                  657678678678678
                </p>
                <p>
                  <span className="font-bold text-[15px]">IFSC CODE:</span>{" "}
                  wer56767868
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 - Upload Document */}
          <div className="relative flex items-start space-x-4 mb-8">
            <CheckCircle className="text-themeYellow  w-6 h-6 z-10 dark:bg-gray-900 bg-white" />
            <div className="">
              <h3 className="text-lg font-semibold">Upload Document</h3>
              <div className="border border-gray-500 p-2 rounded-lg text-center mt-4">
                <label
                  htmlFor="fileUpload"
                  className="cursor-pointer text-blue-400 block"
                >
                  {uploadedImage ? "Change Image" : "UPLOAD"}
                </label>
                <input
                  type="file"
                  id="fileUpload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileUpload}
                />
                {uploadedImage && (
                  <img
                    src={uploadedImage}
                    alt="Uploaded"
                    className="mt-4 w-auto max-h-40 object-cover rounded-lg"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Step 4 - Confirm Payment */}
          <div className="relative flex items-start space-x-4">
            <CheckCircle className="text-themeYellow  w-6 h-6 z-10 dark:bg-gray-900 bg-white" />
            <div>
              <h3 className="text-lg font-semibold">Confirm Payment</h3>
              {/* <p className="text-gray-400">
                After transferring the funds, click on the "Transferred, Notify
                Seller" button.
              </p> */}
            </div>
          </div>
          <div className="relative flex items-center flex-col px-10 mt-8 ">
            <GradientButton
              text="Transferred, notify seller"
              className="w-auto md:w-[500px] p-2 hover:!bg-white rounded-lg"
            />
            <GradientButton
              onClick={() => setIsOpen(true)}
              text="Raise dispute"
              className="w-auto md:w-[500px] p-2 hover:!bg-white rounded-lg mt-3"
            />
            <button className="bg-red-500 w-auto md:w-[500px] mt-2 px-10 h-10 rounded-lg text-white">
              Cancel
            </button>
          </div>
        </div>
        <div className="dark:text-white text-black  col-span-12 lg:col-span-5">
          <h2 className="text-[25px] font-semibold mb-3">Chat</h2>

          {/* Chat Messages */}
          <div className="h-64 overflow-y-auto relative bg-[linear-gradient(132.9deg,_#DADADA_9.82%,_rgba(218,218,218,0.07)_49.06%,_#DADADA_103.78%)] p-[1.02px] rounded-lg mb-3 h-[70vh]">
            <div className="dark:bg-black bg-gray-200 dark:text-white rounded-xl h-full w-full p-5">
            {messages.length === 0 && (
              <p className="text-gray-400">No messages yet...</p>
            )}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 my-1 max-w-[80%] rounded-lg ${
                  msg.sender === "user"
                    ? "bg-themeYellow  ml-auto"
                    : "bg-gray-700"
                }`}
              >
                <p>{msg.text}</p>
                <span className="text-xs text-black block text-right">
                  {msg.time}
                </span>
              </div>
            ))}
            </div>
          </div>

          {/* Chat Input */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              className="flex-1 p-2 dark:bg-gray-800 bg-gray-200 rounded-lg text-black dark:text-white outline-none"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="p-2 bg-themeYellow  hover:bg-purple-700 rounded-lg"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 text-black p-6 rounded-lg shadow-lg w-[90%] md:w-[500px] relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <X size={24} />
            </button>

            <h2 className="text-[18px] text-center dark:text-white font-semibold mb-4">Raise Dispute</h2>

            <textarea
              className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none dark:bg-transparent dark:text-white"
              placeholder="Enter your dispute message..." required
            />

            <label className="cursor-pointer text-center rounded-lg text-white block bg-blue-500 w-[200px] p-2 mb-2 ">
              Upload Image
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileUpload1}
              />
            </label>

            {uploadedImage1 && (
              <img
                src={uploadedImage1}
                alt="Uploaded"
                className="mt-2 rounded-lg max-h-40 w-full object-cover"
              />
            )}
               <div className="mt-5">
           <GradientButton text={'Submit Dispute'} onClick={() => alert("Dispute Raised!")} className="py-2 px-11 rounded-lg"/>
           </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orderdetails;
