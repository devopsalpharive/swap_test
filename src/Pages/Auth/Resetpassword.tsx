import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AppDispatch } from "../../redux/store";
import * as yup from 'yup';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { passwordResetSchema } from "../../validation";
import { forgotPasswordChange } from "../../redux/slices/authSlice";


// type passwordreserFormdata = yup.InferType<typeof passwordResetSchema>;

export type passwordreserFormdata = {
  otp: string;
  newPassword: string;
  confirmPassword: string;
};
interface Errors {
  oldPassword?: string;
  password?: string;
  confirmPassword?: string;
}

const ChangePassword: React.FC = () => {
  const [showOldPassword, setShowOldPassword] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [oldPassword, setOldPassword] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  // const [errors, setErrors] = useState<Errors>({});
  const navigate = useNavigate();

  // const validate = (): boolean => {
  //   let errors: Errors = {};
  //   if (!oldPassword) {
  //     errors.oldPassword = "Old password is required";
  //   }
  //   if (!password) {
  //     errors.password = "Password is required";
  //   } else if (password.length < 6) {
  //     errors.password = "Password must be at least 6 characters";
  //   }
  //   if (!confirmPassword) {
  //     errors.confirmPassword = "Please confirm your password";
  //   } else if (password !== confirmPassword) {
  //     errors.confirmPassword = "Passwords do not match";
  //   }
  //   setErrors(errors);
  //   return Object.keys(errors).length === 0;
  // };

  // const handleResetPassword = (): void => {
  //   if (validate()) {
  //     toast.success("Password Changed!", {
  //       position: "top-right",
  //       autoClose: 3000,
  //     });
  //     navigate("/login");
  //   }
  // };


  //  use form and yub used to handle validation

  const dispatch = useDispatch<AppDispatch>()


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<passwordreserFormdata>({
    resolver: yupResolver(passwordResetSchema),
    defaultValues: {
      otp: "",
      newPassword: "",
      confirmPassword: "",
    },
  });





  const onSubmit: SubmitHandler<passwordreserFormdata> = (data: any) => {
    let email = localStorage.getItem("email");
    if (!email) {
      toast.error("Email is missing. Please try again.", { position: "top-right", autoClose: 3000 });
      return;
    }

    let payload = {
      email: email,
      otp: parseInt(data.otp),
      newPassword: data.newPassword,
      confirmPassword: data.confirmPassword
    }
    dispatch(forgotPasswordChange(payload)).then((action: any) => {
      if (action.payload?.success) {
        toast.dismiss()
        localStorage.removeItem("email");
        toast.success(action.payload?.message, { position: "top-right", autoClose: 3000 });
        setTimeout(() => {
          navigate("/");
        }, 3000)
      } else {
        toast.dismiss()
        toast.error(action.payload, { position: "top-right", autoClose: 3000 });
      }
    })
  };



  return (
    <div className="relative w-full h-screen bg-cover bg-center flex items-center justify-center bg-[url('/src/assets/images/bg.png')] dark:bg-[url('/src/assets/images/darkbg.png')]">
      <ToastContainer />
      <div className="flex flex-col bg-[#FFFFFF80] backdrop-blur-lg   dark:bg-[#18191D80] border dark:border-[#23262F99] border-[#FFFFFF99] rounded-lg p-6 w-full max-w-lg  dark:dark:text-white">

        <h2 className="text-[24px] font-semibold text-center text-black dark:text-white mb-4">
          Reset Password
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mt-3 lg:mt-6">
            <label className="text-sm mb-1">OTP</label>
            <div className={`flex items-center border ${errors.otp ? "border-red-500" : "border-[#237249]"} rounded-lg px-3 py-2 bg-white dark:bg-gray-700`}>
              <input
                type={showPassword ? "text" : "password"}
                {...register("otp")}
                className="bg-transparent w-full p-1 outline-none text-black dark:text-white"
                placeholder="Enter new otp"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeIcon className="text-gray-500" /> : <EyeOffIcon className="text-gray-500" />}
              </button>
            </div>
            {errors.otp && <p className="text-red-500 text-xs mt-1">{errors.otp.message}</p>}
          </div>



          {/* New Password Input */}
          <div className="flex flex-col mt-3 lg:mt-6">
            <label className="text-sm mb-1">New Password</label>
            <div className={`flex items-center border ${errors.newPassword ? "border-red-500" : "border-[#237249]"} rounded-lg px-3 py-2 bg-white dark:bg-gray-700`}>
              <input
                type={showPassword ? "text" : "password"}
                {...register("newPassword")}
                className="bg-transparent w-full p-1 outline-none text-black dark:text-white"
                placeholder="Enter new password"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeIcon className="text-gray-500" /> : <EyeOffIcon className="text-gray-500" />}
              </button>
            </div>
            {errors.newPassword && <p className="text-red-500 text-xs mt-1">{errors.newPassword.message}</p>}
          </div>

          {/* Confirm Password Input */}
          <div className="flex flex-col mt-3 lg:mt-6">
            <label className="text-sm mb-1">Confirm Password</label>
            <div className={`flex items-center border ${errors.confirmPassword ? "border-red-500" : "border-[#237249]"} rounded-lg px-3 py-2 bg-white dark:bg-gray-700`}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword")}
                className="bg-transparent w-full p-1 outline-none text-black dark:text-white"
                placeholder="Confirm new password"
              />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <EyeIcon className="text-gray-500" /> : <EyeOffIcon className="text-gray-500" />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#D3C5E5] text-white p-3 rounded-lg w-full mt-6"
          >
            Reset Password
          </button>
        </form>


      </div>
    </div>
  );
};

export default ChangePassword;