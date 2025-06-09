import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import LoginBtn from "./LoginBtn";
import { Lock, Mail } from "../../SVGComponents";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { LoginSchema } from "../../validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup';
import { loginUser } from "../../redux/slices/authSlice";
import { Vortex } from 'react-loader-spinner'



// export type LoginFormData = yup.InferType<typeof LoginSchema>;

export interface LoginFormData {
  email: string;
  password: string;
}
const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isChecked, setIsChecked] = useState(false);
  const [load, setLoad] = useState(false);




  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: yupResolver(LoginSchema)
  });

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit: SubmitHandler<LoginFormData> = (data: any) => {
    setLoad(true);
    dispatch(loginUser(data)).then((action: any) => {
      console.log(action.payload);
      if (action.payload?.success) {
        localStorage.setItem("alphaswap", action.payload?.result?.token);
        setTimeout(() => {

        },);
        toast.dismiss()
        toast.success(action.payload?.message, { position: "top-right", autoClose: 3000 });
        setTimeout(() => navigate("/home"), 300);
      } else {
        toast.dismiss()
        toast.error(action.payload, { position: "top-right", autoClose: 3000 });
      }
    }).finally(() => {
      setLoad(false);
    });
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center flex items-center justify-center dark:bg-black">
      <ToastContainer />
      <div className="flex flex-col bg-[#FFFFFF80] backdrop-blur-lg   dark:bg-[#18191D80] border border-[#D3C5E5] rounded-lg p-6 w-full max-w-lg  dark:text-white mx-2">
        <LoginBtn />

        <form onSubmit={handleSubmit(onSubmit)} noValidate>

          {/* Email Input */}
          <div className="flex flex-col mt-3 lg:mt-10">
            <label className="text-sm mb-1">Email</label>
            <div className={`flex items-center border ${errors.email ? "border-red-500" : "border-[#D3C5E5]"} rounded-lg px-3 py-2 bg-white dark:bg-[#23262F]`}>

              <Mail /><span className="text-[#777E90]">|</span>
              <input
                autoFocus={true}
                {...register('email')}
                className="bg-transparent custom-input  w-full p-1 outline-none focus-within:none focus:outline-none dark:text-white placeholder-gray-400"
                placeholder="Enter your email"
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Password Input */}
          <div className="flex flex-col mt-3 lg:mt-9">
            <label className="text-sm mb-1">Password</label>
            <div className={`flex items-center border ${errors.password ? "border-red-500" : "border-[#D3C5E5]"} rounded-lg px-3 py-2 bg-white dark:bg-[#23262F]`}>
              <Lock />
              <input
                type={showPassword ? "text" : "password"}
                {...register('password')}
                className="bg-transparent w-full custom-input p-1 outline-none focus-within:none focus:outline-none dark:text-white placeholder-gray-400"
                placeholder="Enter your password"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeIcon className="text-gray-400" /> : <EyeOffIcon className="text-gray-400" />}
              </button>
            </div>
            <small style={{ marginTop: "8px", color: "#777E90" }}>Password must contain at least 5 characters, one alphabet, one number, and one special character (e.g., Abc@1234)</small>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          {/* Login Button */}

          {/* Links */}
          <div className="mt-5">
            <a href="/forget_password" className="text-sm dark:text-txtDark">
              Forgot password?
            </a>
          </div>
        
          <button
            type="submit"
            disabled={load}
            className={`bg-gradient-primary text-white p-3 rounded-lg w-full mt-3 lg:mt-6 flex items-center justify-center`}
          >
            {load ? (<>
              <Vortex height="30" width="30" colors={['white', 'white', 'white', 'white', 'white', 'white']} />
              Loading...
            </>
            ) : (
              "Login"
            )}
          </button>
        </form>

      </div>
    </div >
  );
};

export default Login;
