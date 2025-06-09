import React, { useState, useEffect } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import GradientButton from "../UIComponents/GradientButton";
import WhiteBtn from "../UIComponents/WhiteBtn";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { updateUserProfile, uploadImage } from "../redux/slices/authSlice";
import { toast, ToastContainer } from "react-toastify";
import { editProfileSchema } from "../validation";
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import { Resolver } from 'react-hook-form';

// type EditFormData = yup.InferType<typeof editProfileSchema>;
interface EditFormData {
  name?: string;
  phone?: string;
  address?: string;
  state?: string;
  country?: string;
  zipCode?: string;
  image?: any;
}

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  pincode: string;
}

interface ProfileEditProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (updatedData: FormData & { profilePic: string | null }) => void;
}

const ProfileEdit: React.FC<ProfileEditProps> = ({
  isOpen,
  onClose,
  onUpdate,
}) => {
  if (!isOpen) return null;


  
  const handleCancel = () => {
    onClose();
  };



  //  newly added for data 

  const { user } = useSelector((state: any) => state.auth);

  const userData = user?.result;
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const [image, setImage] = useState<string>("");


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditFormData>({
    resolver: yupResolver(editProfileSchema) as Resolver<EditFormData>,
    defaultValues: {
      image: userData?.image || "",
      name: userData?.name || "",
      address: userData?.address || "",
      state: userData?.state || "",
      country: userData?.country || "India",
      zipCode: userData?.zipCode || "",
      phone: userData?.phone || "",
    },
  });

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const maxSizeMB = 2;

    if (file.size > maxSizeMB * 1024 * 1024) {
      toast.error(`Image must be smaller than ${maxSizeMB}MB`);
      return;
    }


    try {
      const response = await dispatch(uploadImage(file) as any)
      if (response?.payload?.success) {
        setImage(response?.payload?.result);
        toast.success(response?.payload?.message || "Image uploaded", { autoClose: 2000 });

        if (e.target) e.target.value = '';
      } else {
        toast.error("Image Upload Failed .... Please Try Again")
      }
    } catch (err: any) {
      console.error('Image upload error:', err);
    }
  };


  const onSubmit: SubmitHandler<EditFormData> = async (data) => {
    // alert("Profile Updated");
    const payload = {
      name: data.name,
      address: data.address,
      state: data.state,
      country: data.country,
      zipCode: data.zipCode,
      phone: data.phone,
      image: image || userData?.image || "",
    };


    await dispatch(updateUserProfile(payload) as any).then((action: any) => {
      console.log("655644", action)

      if (action?.payload?.success === true) {
        toast.dismiss();
        toast.success(action?.payload?.message || "Profile updated", { autoClose: 3000 });
        setTimeout(() => {
          navigate("/profile", { state: { updated: true } }); // ✅ pass state
          onClose();
        }, 3000)
      } else {
        toast.dismiss();
        toast.error(action?.payload || "Profile update failed", { autoClose: 3000 });
      }

    })
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <ToastContainer />
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gradient-to-tr from-[#DADADA] via-[rgba(218,218,218,0.07)] to-[#DADADA] bg-white dark:bg-themeBlack p-[1.02px] rounded-lg w-[37rem] relative">
        <div className=" bg-white dark:bg-themeBlack py-6 px-3 rounded-lg shadow-xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-xl text-black dark:text-titleGray"
          >
            ✖
          </button>

          <h2 className="text-lg font-bold mb-4 text-black dark:text-titleGray">
            Update Profile
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="flex items-center justify-between mb-4">
              <div>
                <label className="block text-sm font-medium text-black dark:text-titleGray">
                  Profile Picture (Optional)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="upload-pic"
                />
                <label
                  htmlFor="upload-pic"
                  className="cursor-pointer px-4 py-2 bg-gradient-primary text-white rounded-lg inline-block mt-2 text-sm"
                >
                  Upload
                </label>
                <p className="text-[14px] mt-1 text-black dark:text-titleGray">
                  Max. upload size 2MB (Jpeg, Png)
                </p>
              </div>

              <img
                src={image || userData?.image || "https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"}
                alt="Profile"
                onError={(e) => {
                  e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png";
                }}
                className="w-16 h-16 rounded-full mr-3 object-cover"
              />
            </div>

            {/* Form Fields */}
            <div className="space-y-3 overflow-y-auto md:h-[58vh] h-full scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-900">
              <div className="grid grid-cols-1 gap-[15px]">
                <div>
                  <label className="block text-sm font-medium text-black dark:text-titleGray">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    {...register("name")}
                    className="w-full p-2 border border-[#4343434D] rounded-lg dark:text-titleGray dark:bg-[#FFFFFF4D]"
                  />
                  {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-[15px]">
                <div>
                  <label className="block text-sm font-medium text-black dark:text-titleGray">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Enter Phone Number"
                    {...register("phone")}
                    className="w-full p-2 border border-[#4343434D] rounded-lg dark:text-titleGray dark:bg-[#FFFFFF4D]"
                  />
                  {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black dark:text-titleGray">
                    Address
                  </label>
                  <input
                    placeholder="Enter Address"
                    {...register("address")}
                    className="w-full p-2 border border-[#4343434D] rounded-lg dark:text-titleGray dark:bg-[#FFFFFF4D]"
                  />
                  {errors.address && <p className="text-red-500 text-xs">{errors.address.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-black dark:text-titleGray">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="Enter City"
                    {...register("state")}
                    className="w-full p-2 border border-[#4343434D] rounded-lg dark:text-titleGray dark:bg-[#FFFFFF4D]"
                  />
                  {errors.state && <p className="text-red-500 text-xs">{errors.state.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-black dark:text-titleGray">
                    Country
                  </label>
                  <input
                    type="text"
                    {...register("country")}
                    className="w-full p-2 border border-[#4343434D] rounded-lg bg-white dark:text-titleGray text-black dark:bg-[#FFFFFF4D]"
                  />
                  {errors.country && <p className="text-red-500 text-xs">{errors.country.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-black dark:text-titleGray">
                    Postal / Zip Code
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Postal / Zip Code"
                    {...register("zipCode")}
                    className="w-full p-2 border border-[#4343434D] rounded-lg dark:text-titleGray dark:bg-[#FFFFFF4D]"
                  />
                  {errors.zipCode && <p className="text-red-500 text-xs">{errors.zipCode.message}</p>}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between gap-2 mt-6">
              <GradientButton
                text="Cancel"
                className="w-1/2 px-6 py-3 text-center hover:!-translate-y-0 !rounded-2xl"
                onClick={handleCancel}
              />
              <WhiteBtn
                type="submit"
                text="Save"
                className="w-1/2 text-center !font-normal"
              />
            </div>
          </form>
          {/* Form Fields */}

        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
