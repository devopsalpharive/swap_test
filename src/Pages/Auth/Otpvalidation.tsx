
import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { useForm } from "react-hook-form";
import { OtpSchema } from "../../validation";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { verifyUser } from "../../redux/slices/authSlice";

// type otpSchemaData = yup.InferType<typeof OtpSchema>;
type otpSchemaData = {
  otp: string; // Remove the optional marker
};
const OTP_LENGTH = 6;

const OtpValidation = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const {
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors }
  } = useForm<otpSchemaData>({
    resolver: yupResolver(OtpSchema)
  });

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    clearErrors("otp");

    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, OTP_LENGTH);
    if (!/^\d+$/.test(pasteData)) return;

    const newOtp = pasteData.split("");
    const filledOtp = Array(OTP_LENGTH).fill("").map((_, i) => newOtp[i] || "");

    setOtp(filledOtp);

    // ✅ Set value to RHF to avoid "OTP is required"
    const fullOtp = filledOtp.join("");
    setValue("otp", fullOtp);
    clearErrors("otp");

    // Focus last input box after paste
    setTimeout(() => {
      inputRefs.current[Math.min(pasteData.length, OTP_LENGTH) - 1]?.focus();
    }, 0);
  };


  const onSubmit = () => {
    const fullOtp = otp.join("");
    setValue("otp", fullOtp);

    if (fullOtp.length !== OTP_LENGTH) {
      setError("otp", { message: "Please enter full OTP" });
      return;
    }

    const email = localStorage.getItem("email");
    if (!email) {
      toast.error("Email not found. Please go back and enter your email again.", {
        position: "top-right",
        autoClose: 3000
      });
      return;
    }

    const payload = {
      email,
      otp: fullOtp
    };

    dispatch(verifyUser(payload))
      .then((action: any) => {
        toast.dismiss();

        if (action.payload?.success) {
          toast.success(action.payload.message || "OTP Verified Successfully", {
            position: "top-right",
            autoClose: 3000
          });

          setTimeout(() => {
            navigate("/register_successfull");
          }, 3000);
        } else {
          toast.error(action.payload?.message || "Verification failed. Please try again.", {
            position: "top-right",
            autoClose: 3000
          });
        }
      })
      .catch((err: any) => {
        toast.dismiss();
        toast.error("Something went wrong. Please try again later.", {
          position: "top-right",
          autoClose: 3000
        });
        console.error("OTP verification error:", err);
      });
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center flex items-center justify-center dark:bg-black">
      <ToastContainer />
      <div className="flex flex-col bg-[#FFFFFF80] backdrop-blur-lg   dark:bg-[#18191D80] border border-[#D3C5E5] rounded-lg p-6 w-full max-w-lg  dark:text-white">
        <h2 className="text-[24px] font-semibold dark:text-white text-black mb-2 text-center">
          Email Verification
        </h2>
        <p className="dark:text-white text-black mb-6  text-center">
          Enter the OTP sent to your email to verify your account.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} noValidate >
          {/* OTP Inputs */}
          <div className="flex justify-center space-x-2 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-12 h-12 xs:w-8 xs:h-8 text-center text-lg font-bold border border-[#D3C5E5] dark:text-white  placeholder-white placeholder:text-[13px]  dark:bg-[#23262F] rounded-md focus:ring-2 focus:ring-[#D3C5E5] outline-none"
              />
            ))}
          </div>

          {errors.otp && (
            <p className="text-red-500 text-sm text-center mb-4">{errors.otp.message}</p>
          )}

          {/* Resend OTP */}
          <p className="dark:text-white text-black text-sm sm:text-base text-center mb-6">
            Didn't receive the OTP?{" "}
            <span className=" bg-gradient-primary bg-clip-text text-transparent hover:underline cursor-pointer hover:underline">
              Resend OTP
            </span>
          </p>

          {/* Verify Button */}
          <button
            // onClick={handleVerify}
            type="submit"
            className="w-full bg-gradient-primary shadow-lg text-white text-lg p-3 rounded-md font-semibold   transition"
          >
            Verify OTP
          </button>
        </form>


        {/* Back to Login */}
        <a
          href="/login"
          className="text-sm sm:text-base  bg-[#D3C5E5] bg-clip-text text-transparent hover:underline mt-4 block text-center"
        >
          Back to Login
        </a>

      </div>
    </div>
  );
};

export default OtpValidation;
