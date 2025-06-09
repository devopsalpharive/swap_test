import React, { useState } from "react";
import GradientButton from "../UIComponents/GradientButton";
import { Link} from "react-router-dom";
import Layer2 from "../assets/images/Layer2.png";

const GpayTransfer = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mt-11 md:mt-auto">
      <Link to="/payment-method">
        <img src={Layer2} className="dark:invert mb-10" />
      </Link>
      <h1 className="text-center dark:text-white text-[30px]">
        Add payment method
      </h1>
      <div className="mt-10 max-w-[750px] m-auto">
        <h2 className="flex dark:text-white text-[20px]">Gpay</h2>
        <div className="mt-5">
          <label className="dark:text-white">Name</label>
          <div
            className={`flex items-center border border-[#237249] rounded-lg px-3 mt-4 py-2 bg-white dark:bg-[#23262F]`}
          >
            <input
              type="text"
              className="bg-transparent w-full p-1 outline-none focus-within:none focus:outline-none dark:text-white placeholder-gray-400"
              placeholder="Name"
            />
          </div>
        </div>
        <div className="mt-5">
          <label className="dark:text-white">GPAY ID </label>
          <div
            className={`flex items-center border border-[#237249] rounded-lg px-3 mt-4 py-2 bg-white dark:bg-[#23262F]`}
          >
            <input
              type="text"
              className="bg-transparent w-full p-1 outline-none focus-within:none focus:outline-none dark:text-white placeholder-gray-400"
              placeholder="GPAY ID"
            />
          </div>
        </div>
        <div className="mt-5">
        <label className="dark:text-white">GPAY QR code(Optional)</label>
        <div className="flex flex-col  gap-4 py-4 rounded-lg w-80">
          {image && (
            <img
              src={image}
              alt="Uploaded"
              className="w-40 h-40 object-cover rounded-lg"
            />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="fileInput"
          />
          <label
            htmlFor="fileInput"
            className="w-max cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Upload Image
          </label>
        </div>
        </div>


        <GradientButton
          text={"Confirm"}
          className="rounded-lg font-bold py-2 px-10 mt-5"
        />
      </div>
    </div>
  );
};

export default GpayTransfer;
