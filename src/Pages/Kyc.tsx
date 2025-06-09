import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layer2 from "../assets/images/Layer2.png";
import GradientButton from "../UIComponents/GradientButton";
import { Calender } from "../components/SvgCollection";
import CustomInput from "../UIComponents/CustomInput";
import CustomSelect from "../UIComponents/CustomSelect";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { toast, ToastContainer } from "react-toastify";
import { uploadImage } from "../redux/slices/authSlice";
import { createKyc, getKycDetails } from "../redux/slices/kycSlice";
import { useSelector } from "react-redux";


const Kyc = () => {
  // Country options
  const countries = [
    { label: "India", value: "India" },
    { label: "USA", value: "USA" },
    { label: "Australia", value: "Australia" },
    { label: "UK", value: "UK" },
    { label: "Canada", value: "Canada" },
    { label: "Germany", value: "Germany" },
    { label: "France", value: "France" },
  ];
  const gender = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Other", value: "Other" },
  ];
  const idtype = [
    { value: "passport", label: "Passport" },
    { value: "driving_license", label: "Driving License" },
    { value: "national_id", label: "National Id" },
  ];
  const addproof = [
    { label: "Utility bills (gas, electricity, water)", value: "utility_bill" },
    { label: "  Telephone / Internet bill (no cell phone bill)", value: "internet_bill" },
    { label: "Pension statement<", value: "pension_statement" },
    { label: "Tax statement", value: "tax_statement" },
    { label: " Certificate of registration", value: "certificate_registration" },
    { label: "Bank Confirmation", value: "bank_confirmation" },
  ];

  // State for form data
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_no: "",
    gender: "",
    dob: "",
    country: "",
    state: "",
    city: "",
    zipcode: "",
    address: "",
    telegram: "",
    document_type: "",
    document_num: "",
    front: null as File | null,
    back: null as File | null,
    selfie: null as File | null,
    residential: "",
    proof_address: null as File | null,
    isConfirmed: false,
  });

  const [kycSubmit, setKycSubmit] = useState(false)
  const [status, setStatus] = useState('')



  // State for errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  const dispatch = useDispatch<AppDispatch>()

  const { kycDetails } = useSelector((state: any) => state.kyc)

  console.log("8458448458485", kycDetails)


  // Handle input changes correctly
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    console.log(`Changing ${name} to:`, value); // Debugging
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof formData
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];

    if (!allowedTypes.includes(file.type)) {
      toast.error("Invalid file format. Please upload a JPEG, PNG, JPG, or WEBP image.");
      return;
    }

    try {
      const action = await dispatch(uploadImage(file));

      if (action?.payload?.success) {
        const uploadedUrl = action.payload.result;

        // Update formData with the uploaded URL
        setFormData((prev) => ({
          ...prev,
          [field]: uploadedUrl,
        }));

        toast.success(action.payload.message, {
          position: "top-right",
          autoClose: 3000,
        });
      } else {
        toast.error(action.payload || "Image upload failed", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Image upload error:", error);
      toast.error("An error occurred while uploading the image.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  // Validate Form
  const validateForm = () => {
    let errors: Record<string, string> = {};
    if (!formData.first_name) errors.firstName = "First Name is required";
    if (!formData.last_name) errors.lastName = "Last Name is required";
    if (!formData.gender) errors.gender = "Gender is required";
    if (!formData.country) errors.country = "Country is required";
    if (!formData.state) errors.state = "State is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.telegram)
      errors.telegramName = "Telegram Username is required";
    if (!formData.document_type) errors.idType = "ID Type is required";
    if (!formData.document_num) errors.idNumber = "ID Number is required";
    if (!formData.residential) errors.residential = "Proof Type is required";
    if (!formData.phone_no.match(/^\d{10}$/))
      errors.phone_no = "Enter a valid 10-digit phone number";
    if (!formData.address) errors.address = "Address is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  // Phone number validation (10 digits)

  // Handle Form Submission
  const handleSubmit = async () => {
    if (validateForm()) {
      console.log("65654445401", formData)
      await dispatch(createKyc(formData)).then((action: any) => {
        console.log("action", action)

        if (action.payload?.success) {
          toast.success(action.payload?.message, { position: "top-right", autoClose: 3000 });
        } else {
          toast.error(action.payload, { position: "top-right", autoClose: 3000 });
        }
      })
    }
  };

  const fetchKycList = async () => {
    await dispatch(getKycDetails()).then((action: any) => {
      if (action.payload?.success) {
        setKycSubmit(true)
        setFormData(action.payload?.result)
        setStatus(action?.payload?.result?.status)
        // fetchKycList()
      } else {
        setKycSubmit(false)
        setFormData({
          first_name: "",
          last_name: "",
          phone_no: "",
          gender: "",
          dob: "",
          country: "",
          state: "",
          city: "",
          zipcode: "",
          address: "",
          telegram: "",
          document_type: "",
          document_num: "",
          front: null as File | null,
          back: null as File | null,
          selfie: null as File | null,
          residential: "",
          proof_address: null as File | null,
          isConfirmed: false,
        });
      }
    })
  }




  useEffect(() => {
    fetchKycList()
  }, [])





  return (
    <div>
      <ToastContainer />
      <Link to="/profile">
        {" "}
        <img src={Layer2} className="dark:invert mb-10" />
      </Link>
      <h2 className="text-[32px] xs:text-[24px] font-funnel font-semibold mb-10 dark:text-white">
        KYC Verification
        {status == "0" ? (
          <div>
            <h2 className=" text-[32px] xs:text-[24px] font-funnel font-semibold mb-10 dark:text-white">
              KYC Verification is Pending
            </h2>
          </div>
        ) : status == "1" ? (
          <div>
            <h2 className=" text-[32px] xs:text-[24px] font-funnel font-semibold mb-10 dark:text-white">
              KYC Verification is Approved
            </h2>
          </div>
        ) : status == "2" ? (
          <div>
            <h2 className=" text-[32px] xs:text-[24px] font-funnel font-semibold mb-10 dark:text-white">
              KYC Verification is Rejected
            </h2>
            <div className="">
              <button
                className="text-[20px] group rounded-full bg-[#D3C5E5] text-white duration-300 ease-in-out hover:-translate-y-2
                        hover:shadow-[0_8px_20px_0_#35C66B4d]  mt-14 px-8 py-2 text-center flex justify-center mx-auto"
                onClick={() => setKycSubmit(false)}
              >
                Recreate Kyc
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
      </h2>

      <div className="mt-10">
        <h3 className="flex dark:text-white text-[20px] mb-5  font-semibold">
          Personal Information
        </h3>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          {/* First Name */}
          <div>
            <CustomInput
              type="text"
              name="first_name"
              placeholder="First Name *"
              value={formData.first_name}
              disabled={kycSubmit}
              onChange={handleChange}
            />
            {errors.first_name && (
              <p className="text-red-500 text-xs">{errors.first_name}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <CustomInput
              type="text"
              name="last_name"
              placeholder="Last Name *"
              value={formData.last_name}
              disabled={kycSubmit}
              onChange={handleChange}
            />
            {errors.last_name && (
              <p className="text-red-500 text-xs">{errors.last_name}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <CustomInput
              type="tel"
              name="phone_no"
              placeholder="Phone Number *"
              value={formData.phone_no}
              onChange={handleChange}
              disabled={kycSubmit}
              onInput={(e) => {
                const input = e.target as HTMLInputElement;
                input.value = input.value.replace(/\D/g, "");
              }}
              pattern="[0-9]*"
            />
            {errors.phone_no && (
              <p className="text-red-500 text-xs">{errors.phone_no}</p>
            )}
          </div>

          {/* Gender */}
          <div>
            <CustomSelect
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              disabled={kycSubmit}
              options={gender}
              placeholder="Select Gender *"
            />
            {errors.gender && (
              <p className="text-red-500 text-xs">{errors.gender}</p>
            )}
          </div>

          {/* Date of Birth */}
          <div className="relative">
            <CustomInput
              type="date"
              name="dob"
              value={formData.dob}
              disabled={kycSubmit}
              onChange={handleChange}
              placeholder="date of birth"
            />
            <div className="absolute inset-y-0 right-3 top-[8px] flex items-center pointer-events-none">
              <Calender />
            </div>
          </div>
          {/* Country */}
          <div>
            <CustomSelect
              name="country"
              value={formData.country}
              onChange={handleChange}
              disabled={kycSubmit}
              options={countries}
              placeholder="Select country *"
            />
            {errors.country && (
              <p className="text-red-500 text-xs">{errors.country}</p>
            )}
          </div>
          {/* State */}
          <div>
            <CustomInput
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              disabled={kycSubmit}
              placeholder="state *"
            />
            {errors.state && (
              <p className="text-red-500 text-xs">{errors.state}</p>
            )}
          </div>
          {/* City */}
          <div>
            <CustomInput
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              disabled={kycSubmit}
              placeholder="City *"
            />
            {errors.city && (
              <p className="text-red-500 text-xs">{errors.city}</p>
            )}
          </div>

          {/* Zip Code */}
          <div>
            <CustomInput
              type="number"
              name="zipcode"
              placeholder="Zip/Postal Code *"
              value={formData.zipcode}
              disabled={kycSubmit}
              onChange={handleChange}
            />
            {errors.zipcode && (
              <p className="text-red-500 text-xs">{errors.zipcode}</p>
            )}
          </div>
          {/* telegram username */}
          <div>
            <CustomInput
              type="text"
              name="telegram"
              placeholder="Telegram Username *"
              value={formData.telegram}
              disabled={kycSubmit}
              onChange={handleChange}
            />
            {errors.telegram && (
              <p className="text-red-500 text-xs">{errors.telegram}</p>
            )}
          </div>
          {/* Address (TextArea) */}
        </div>
        <div className="mt-6">
          <div className="bg-gradient-primary rounded-lg h-[105px] p-[1px]">
            <textarea
              rows={4}
              name="address"
              placeholder="Address *"
              value={formData.address}
              onChange={handleChange}
              disabled={kycSubmit}
              className="bg-white dark:bg-[#23262F] rounded-lg w-full p-2.5 outline-none dark:text-white placeholder-gray-400 h-full resize-none"
            />
          </div>
          {errors.address && (
            <p className="text-red-500 text-xs">{errors.address}</p>
          )}
          <p className="text-[18px] font-medium mt-3 text-yellow-500">
            Note: Please type carefully and fill out the form with your personal
            details. You are not allowed to edit the details once you have
            submitted the application
          </p>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="flex dark:text-white text-[20px] mb-5  font-semibold">
          Personal Information
        </h3>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <CustomSelect
              name="document_type"
              value={formData.document_type}
              onChange={handleChange}
              disabled={kycSubmit}
              options={idtype}
              placeholder="Select Gender *"
            />
            {errors.document_type && (
              <p className="text-red-500 text-xs">{errors.document_type}</p>
            )}
          </div>
          <div>
            <CustomInput
              type="text"
              name="document_num"
              placeholder="ID document number *"
              value={formData.document_num}
              disabled={kycSubmit}
              onChange={handleChange}
            />
            {errors.document_num && (
              <p className="text-red-500 text-xs">{errors.document_num}</p>
            )}
          </div>
        </div>
        {/* Upload Sections */}
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          {/* ID Front */}
          <div className="bg-gradient-primary rounded-lg p-[1px] mt-6">
            <div className="bg-white dark:bg-[#23262F] rounded-lg  p-6 text-center h-full">
              <p className="mb-3 dark:text-white">ID Front Document</p>
              <label className="bg-gradient-primary px-4 py-2 rounded-lg cursor-pointer text-white">
                UPLOAD HERE
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.webp"
                  onChange={(e) => handleFileChange(e, "front")}
                  disabled={kycSubmit}
                  className="hidden"
                />
              </label>
              {formData.front && (
                <img
                  src={URL.createObjectURL(formData.front)}
                  alt="ID Front"
                  className="w-[300px] h-[150px] object-contain mt-3 mx-auto rounded-lg border border-gray-600"
                />
              )}
              <p className="text-[14px] mt-3 text-gray-400">
                Please upload a JPEG, PNG, JPG, or WEBP image.
              </p>
            </div>
          </div>
          {/* ID Back */}
          <div className="bg-gradient-primary rounded-lg p-[1px] mt-6">
            <div className="bg-white dark:bg-[#23262F] rounded-lg  p-6 text-center h-full">
              <p className="mb-3 dark:text-white">ID Back Document</p>
              <label className="bg-gradient-primary px-4 py-2 rounded-lg cursor-pointer text-white">
                UPLOAD HERE
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.webp"
                  onChange={(e) => handleFileChange(e, "back")}
                  className="hidden"
                  disabled={kycSubmit}
                />
              </label>
              {formData.back && (
                <img
                  src={URL.createObjectURL(formData.back)}
                  alt="ID Back"
                  className="w-[300px] h-[150px] object-contain mt-3 mx-auto rounded-lg border border-gray-600"
                />
              )}
              <p className="text-[14px] mt-3 text-gray-400">
                Please upload a JPEG, PNG, JPG, or WEBP image.
              </p>
            </div>
          </div>
          {/* Selfie */}
          <div className="bg-gradient-primary rounded-lg p-[1px] mt-2">
            <div className="bg-white dark:bg-[#23262F] rounded-lg  p-6 text-center h-full md:col-span-2">
              <p className="mb-3 dark:text-white">Selfie with ID Document</p>
              <label className="bg-gradient-primary px-4 py-2 rounded-lg cursor-pointer text-white">
                UPLOAD HERE
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.webp"
                  onChange={(e) => handleFileChange(e, "selfie")}
                  className="hidden"
                  disabled={kycSubmit}
                />
              </label>
              {formData.selfie && (
                <img
                  src={URL.createObjectURL(formData.selfie)}
                  alt="Selfie with ID"
                  className="w-[300px] h-[150px] object-contain mt-3 mx-auto rounded-lg border border-gray-600"
                />
              )}
              <p className="text-[14px] mt-3 text-gray-400">
                Please upload a JPEG, PNG, JPG, or WEBP image.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="flex dark:text-white text-[20px] mb-5  font-semibold">
          Address Proof
        </h3>
        <div className="grid sm:grid-cols-1 grid-cols-1 gap-4">
          <div>
            <CustomSelect
              name="residential"
              options={addproof}
              value={formData.residential}
              disabled={kycSubmit}
              onChange={handleChange}
              className="bg-white dark:bg-[#23262F] rounded-lg  p-3 outline-none dark:text-white"
            />

            {errors.residential && (
              <p className="text-red-500 mt-1">{errors.residential}</p>
            )}
          </div>
          <div className="bg-gradient-primary rounded-lg p-[1px] mt-2">
            <div className="bg-white dark:bg-[#23262F] rounded-lg  p-6 text-center h-full">
              <p className="mb-3 dark:text-white">
                Residential document or phone document upload
              </p>
              <label className="bg-gradient-primary px-4 py-2 rounded-lg cursor-pointer text-white">
                UPLOAD HERE
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.webp"
                  onChange={(e) => handleFileChange(e, "proof_address")}
                  disabled={kycSubmit}
                  className="hidden"
                />
              </label>

              {/* Image Preview */}
              {formData.proof_address && (
                <img
                  src={
                    formData.proof_address
                      ? URL.createObjectURL(formData.proof_address)
                      : undefined
                  }
                  alt="Address Proof"
                  className="w-[300px] h-[150px] object-cover mt-3 mx-auto rounded-lg border border-gray-600"
                />
              )}

              <p className="text-[14px] mt-3 text-gray-400">
                Please photograph the complete document. The document must
                contain the same address as your ID card.
              </p>
              <p className="text-[14px] text-gray-400">
                Please upload a JPEG, PNG, JPG, or WEBP image.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-gray-400">
            Note : To avoid delays with verification process, please
            double-check to ensure the above requirements are fully met. Chosen
            credentials must not be expired
          </p>
          <div className="flex items-start mt-6">
            {" "}
            <input
              type="checkbox"
              checked={formData.isConfirmed}
              disabled={kycSubmit}
              onChange={() =>
                setFormData({ ...formData, isConfirmed: !formData.isConfirmed })
              }
              className="mr-2 w-5 h-5 bg-gradient-primary"
            />
            <p className="text-sm dark:text-white">
              I confirm that all the below statements are true.
            </p>
          </div>
        </div>
        <ul className="dark:text-white text-sm mt-4">
          <li> I have read the Terms and Conditions and AML-KYC.</li>
          <li> All the personal information I have entered is correct.</li>
          <li>
            I certify that I am registering to participate as an individual and
            not as an agent of a corporate entity.
          </li>
        </ul>
      </div>
      {/* Submit Button */}
      <GradientButton
        disabled={kycSubmit}
        text="SUBMIT KYC"
        className=" group rounded-full
  bg-gradient-primary text-white
  duration-300 ease-in-out
  hover:-translate-y-2
 hover:shadow-[0_8px_20px_0_#35C66B4d]  mt-14 px-8 py-2 text-center flex justify-center mx-auto"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default Kyc;
