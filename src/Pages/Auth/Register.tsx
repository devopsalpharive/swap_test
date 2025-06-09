import { useState } from "react";
import { EyeIcon, EyeOffIcon, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { CheckIcon } from "lucide-react";
import { Lock, Mail } from "../../SVGComponents";
import LoginBtn from "./LoginBtn";
import { RegisterSchema } from '../../validation';
import * as yup from 'yup';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
// import { useSelector } from "react-redux";
import { registerUser } from "../../redux/slices/authSlice";
import { Vortex } from 'react-loader-spinner'


// Infer the TypeScript type from the schema
// type RegisterFormData = yup.InferType<typeof RegisterSchema>;
type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [load, setLoad] = useState(false);


  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormData>({
    resolver: yupResolver(RegisterSchema)
  });

  const dispatch = useDispatch<AppDispatch>();


  const onSubmit: SubmitHandler<RegisterFormData> = (data: any) => {
    if (!isChecked) {
      toast.dismiss();
      toast.error("Please accept the terms and conditions", { position: "top-right", autoClose: 3000 });
      return;
    }
    setLoad(true)
    dispatch(registerUser(data)).then((action: any) => {
      if (action.payload?.success) {
        toast.dismiss()
        localStorage.setItem("email", data.email);
        toast.success(action.payload?.message, { position: "top-right", autoClose: 3000 });
        setTimeout(() => {
          navigate("/otp_validation");
        }, 3000)
      } else {
        toast.dismiss()
        toast.error(action.payload, { position: "top-right", autoClose: 3000 });
      }
    }).finally(() => {
      setLoad(false);
    });
  };


  return (
    <div className="relative w-full  bg-cover bg-center flex items-center justify-center dark:bg-black mt-14 lg:mt-0">
      <ToastContainer />
      <div className="flex flex-col bg-[#FFFFFF80] backdrop-blur-lg   dark:bg-[#18191D80] border border-[#D3C5E5] lg:mt-20  rounded-lg p-6 w-full max-w-lg  dark:text-white">
        <LoginBtn />

        <form onSubmit={handleSubmit(onSubmit)} noValidate >

          {/* name */}
          <div className="flex flex-col mt-3 lg:mt-3">
            <label className="text-sm mb-1">Name</label>
            <div className={`flex items-center border ${errors.email ? "border-red-500" : "border-[#D3C5E5]"} rounded-lg px-3 py-2 bg-white dark:bg-[#23262F]`}>
              <User className="text-[#777E90] mr-2" /> <span className="text-[#777E90]">|</span>
              <input
                autoFocus={true}
                {...register('name')} placeholder="Enter your name"
                className="bg-transparent w-full p-1 outline-none text-black dark:text-white"
              />
            </div>
            <small style={{ marginTop: "5px", color: "#777E90" }}>Name must contain at least 5 characters</small>
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          {/* Email Input */}
          <div className="flex flex-col mt-3 lg:mt-4">
            <label className="text-sm mb-1">Email</label>
            <div className={`flex items-center border ${errors.email ? "border-red-500" : "border-[#D3C5E5]"} rounded-lg px-3 py-2 bg-white dark:bg-[#23262F]`}>
              <Mail /> <span className="text-[#777E90]">|</span>
              <input
                {...register('email')}
                // type="email"
                className="bg-transparent w-full p-1 outline-none text-black dark:text-white"
                placeholder="Enter your email"
              // value={email}
              // onChange={handleEmailChange}
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Password Input */}
          <div className="flex flex-col mt-3 lg:mt-3">
            <label className="text-sm mb-1">Password</label>
            <div className={`flex items-center border ${errors.email ? "border-red-500" : "border-[#D3C5E5]"} rounded-lg px-3 py-2 bg-white dark:bg-[#23262F]`}>
              <Lock />
              <input
                type={showPassword ? "text" : "password"}
                {...register('password')}
                className="bg-transparent w-full p-1 outline-none text-black dark:text-white"
                placeholder="Enter your password"
              // value={password}
              // onChange={handlePasswordChange}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeIcon className="text-gray-500" /> : <EyeOffIcon className="text-gray-500" />}
              </button>
            </div>
            <small style={{ marginTop: "5px", color: "#777E90" }}>Password must contain at least 5 characters, one alphabet, one number, and one special character (e.g., Abc@1234)</small>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          {/* Confirm Password Input */}
          <div className="flex flex-col mt-3 lg:mt-3">
            <label className="text-sm mb-1">Confirm Password</label>
            <div className={`flex items-center border ${errors.email ? "border-red-500" : "border-[#D3C5E5]"} rounded-lg px-3 py-2 bg-white dark:bg-[#23262F]`}>
              <Lock />
              <input
                type={showConfirmPassword ? "text" : "password"}
                {...register('confirmPassword')}
                className="bg-transparent w-full p-1 outline-none text-black dark:text-white"
                placeholder="Confirm your password"
              // value={confirmPassword}
              // onChange={handleConfirmPasswordChange}
              />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <EyeIcon className="text-gray-500" /> : <EyeOffIcon className="text-gray-500" />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
          </div>

          {/* Links */}

          <label className="flex items-center  mt-3 lg:mt-6 cursor-pointer font-[14px]">
            <div
              className={`w-5 h-5 flex items-center justify-center rounded-md border ${isChecked ? "bg-themeYellow border-themeYellow" : "border-gray-500"
                }`}
              onClick={() => setIsChecked(!isChecked)}
            >
              {isChecked && <CheckIcon className="w-4 h-4 text-black" />}
            </div>
            <span className="ml-3 dark:text-txtDark">
              I have read and agree to the{" "}
              <Link to="/user-agreement" className="bg-[#D3C5E5] bg-clip-text text-transparent hover:underline">
                User Agreement
              </Link>{" "}
              &{" "}
              <Link to="/privacy-policy" className="bg-[#D3C5E5] bg-clip-text text-transparent hover:underline">
                Privacy Policy
              </Link>
            </span>
          </label>
          {/* Register Button */}
          <button
            type="submit"
            className="bg-gradient-primary text-white p-3 rounded-lg w-full mt-3 lg:mt-6 flex items-center justify-center"
            disabled={load}
          >
            {load ? (
              <>
              <Vortex height="30" width="30" colors={['white', 'white', 'white', 'white', 'white', 'white']} />
              Loading...
              </>
            ) : (
              "Register"
            )}
          </button>

        </form>
      </div>

    </div >
  );
};

export default Register;
