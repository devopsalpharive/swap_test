import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { MdError } from "react-icons/md";
import { Mail } from "../../SVGComponents";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPasswordSchema } from "../../validation";
import * as yup from 'yup';
import { useForm, SubmitHandler } from "react-hook-form";
import { forgotPassword } from "../../redux/slices/authSlice";

// type ForgotFormData = yup.InferType<typeof forgotPasswordSchema>;
type ForgotFormData = {
  email: string; // Remove the ?
};

const ForgetPassword: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  // const [errors, setErrors] = useState<any>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const dispatch = useDispatch<AppDispatch>()


  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ForgotFormData>({
    resolver: yupResolver(forgotPasswordSchema)
  });



  const onSubmit: SubmitHandler<ForgotFormData> = (data: any) => {
    dispatch(forgotPassword(data)).then((action: any) => {
      if (action.payload?.success) {
        toast.dismiss()
        localStorage.setItem("email", data.email);
        toast.success(action.payload?.message, { position: "top-right", autoClose: 3000 });
        setTimeout(() => {
          navigate("/reset_password");
        }, 3000)
      } else {
        toast.dismiss()
        toast.error(action.payload, { position: "top-right", autoClose: 3000 });
      }
    })
  };


  return (
    <div className="relative w-full h-screen bg-cover bg-center flex items-center justify-center dark:bg-black">
      <ToastContainer />
      <div className="flex flex-col bg-[#FFFFFF80] backdrop-blur-lg   dark:bg-[#18191D80] border border-[#D3C5E5] rounded-lg p-6 w-full max-w-lg  dark:text-white">


        <h2 className="text-[24px] font-semibold dark:text-white text-black mb-2 text-center">
          Password Recovery
        </h2>
        <p className="dark:text-white text-black mb-6  text-center">
          Enter your email to recover your password
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="text-sm mb-1">Email</label>
            <div className={`flex mt-2 items-center border ${errors.email ? "border-red-500" : "border-[#D3C5E5]"} rounded-lg px-3 py-2 bg-white dark:bg-[#23262F]`}>

              <Mail /><span className="text-[#777E90]">|</span>
              <input
                type="email"
                {...register("email")}
                placeholder="Enter Email Address"
                className={`bg-transparent w-full p-1 outline-none focus-within:none focus:outline-none dark:text-white placeholder-gray-400
      ${errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}`}
              />
            </div>
            {/* Error Icon */}
            {errors?.email && (
              <span className="absolute right-3 top-6 font-semibold   transform -translate-y-1/2 text-red-500">
                <MdError />
              </span>
            )}
          </div>
<div className="text-center">
<button
            type="submit"
            // onClick={() => navigate("/otp_validation")}
            className={` mt-3 lg:mt-9 bg-gradient-primary text-white transition-all p-3 rounded-lg ${errors?.email
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#35C66B]"
              }`}
          // disabled={!email || !!errors.email}
          >
            {loader ? "Loading..." : "Reset Password"}
          </button>
</div>

        </form>


        <a
          href="/login"
          className="text-sm bg-gradient-primary bg-clip-text text-transparent hover:underline text-center mt-4 block"
        >
          Back to Login
        </a>
      </div>
    </div>
  );
};  

export default ForgetPassword;
