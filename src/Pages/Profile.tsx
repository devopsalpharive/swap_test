import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ChangePassword from "../components/ChangePasswordModal";
import ProfileEdit from "../components/ProfileEdit";
import {
  LeftArrow,
  LeftArrowline,
  RightArrow,
  RightArrowline,
} from "../components/SvgCollection";
import { getUserProfile } from "../redux/slices/authSlice";
import { AppDispatch } from "../redux/store";
import GradientButton from "../UIComponents/GradientButton";
import WhiteBtn from "../UIComponents/WhiteBtn";

import { Copy, X } from "lucide-react";

const loginData = [
  { date: "2025-03-10 18:32", browser: "Chrome133.0.0.0", status: "Success" },
  { date: "2025-03-10 15:18", browser: "Chrome133.0.0.0", status: "Success" },
  { date: "2025-03-10 15:11", browser: "Chrome134.0.0.0", status: "Success" },
  { date: "2025-03-10 15:57", browser: "Chrome133.0.0.0", status: "Success" },
  { date: "2024-07-04 17:14", browser: "Chrome126.0.0.0", status: "Success" },
  { date: "2024-06-18 11:25", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-06-06 11:40", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-06-06 11:39", browser: "Chrome125.0.0.0", status: "Failed" },

];
const Profile: React.FC = () => {
  const [openEn, setOpenEn] = useState(false);
  const [verify, setVerify] = useState<"verify" | "unverify">("unverify");
  const [secretValue, setSecretValue] = useState("ABC123XYZ");

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 20;
  const totalPages = Math.ceil(loginData.length / rowsPerPage);

  const currentData = loginData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [passwordModalOpen, setPasswordModalOpen] = useState<boolean>(false);
  const [profileData, setProfileData] = useState<{
    profilePic: string | null;
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    pincode: string;
  }>({
    profilePic: "",
    firstName: "Test",
    lastName: "26",
    phone: "",
    address: "",
    city: "",
    country: "",
    pincode: "",
  });
  const handleCopy = () => {
    navigator.clipboard.writeText(secretValue).then(() => {
      alert("Secret copied to clipboard!");
    });
  };


  const handleOpenEnable = () => {
    setOpenEn(true)
  }
  const handleCloseEnable = () => {
    setOpenEn(false)
  }
  // Handle profile update
  const handleProfileUpdate = (updatedData: typeof profileData) => {
    setProfileData(updatedData);
  };
  const handleChangePassword = () => {
    alert("Password Changed");
  };
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);
  console.log(Object.fromEntries(formData.entries())); // if you want to log all form values
};



  const disapatch = useDispatch<AppDispatch>()

  const { user, error, isLoading } = useSelector((state: any) => state.auth)

  console.log(user, "user")


  const location = useLocation();


  const getUserProfiles = async () => {
    await disapatch(getUserProfile())
  }

  useEffect(() => {
    getUserProfiles()
  }, [disapatch])


  useEffect(() => {
    if (location.state?.updated) {
      getUserProfiles();
      window.history.replaceState({}, document.title); // remove state
    }
  }, [location.state]);

  return (
    <>
      <div className="mt-11 md:mt-auto">
        <div className="p-[1.5px]  rounded-3xl bg-gradient-primary mb-10">
          <div className="flex flex-wrap gap-5 justify-between items-center  rounded-3xl p-4 bg-white dark:bg-[linear-gradient(264.52deg,#222222_4.95%,#3C3C3C_64.19%,#494949_88.37%)]">
            <div className="flex items-center">
              {user?.result?.image ? (
                <img
                  src={user.result.image || "https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"}
                  alt="Profile"
                  className="w-16 h-16 rounded-full mr-3 object-cover"
                />
              ) : (
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"
                  alt="Default Profile"
                  className="w-16 h-16 rounded-full mr-3 object-cover bg-gray-200"
                />
              )}

              <div>
                <h2 className="text-xl font-semibold text-black dark:text-white">
                  {user?.result?.name}
                </h2>
                <p className="text-titleGray font-normal">
                  KYC{" "}
                  <span className={user?.result?.kyc_verify ? "text-green-600" : "text-red-600"}>
                    {user?.result?.kyc_verify ? "Verified" : "Unverified"}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              {" "}
              <GradientButton
                text="Edit Profile"
                className="px-10 py-2 md:mb-4 hover:!-translate-y-0 !rounded-2xl"
                onClick={() => setIsModalOpen(true)}
              />
              <WhiteBtn
                text="Change Password"
                className="mt-2 text-white !font-normal"
                fontSize="!text-sm"
                onClick={() => setPasswordModalOpen(true)}
              />
            </div>
          </div>

          {/* Profile Modal */}
          <ProfileEdit
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onUpdate={handleProfileUpdate}
          />
          <ChangePassword
            isOpen={passwordModalOpen}
            onClose={() => setPasswordModalOpen(false)}
            onUpdate={handleChangePassword}
          />
        </div>
        <div className="text-black dark:text-white space-y-6">
          <div className="text-[18px] lg:text-[24px]">
            Two-Factor Authentication (2FA)
          </div>
          <div className="text-[14px] lg:text-[16px] w-full md:w-4/5 lg:w-1/2 text-[#a2a2a2] dark:text-[#c7c7c7] ">
            Choose [Google Verification + Email + Trading Password] or [Mobile
            Phone + Trading Password] to ensure the safety of your assets.
          </div>
          <div className="flex justify-between">
            <div className="text-[16px] lg:text-[20px] flex items-center">
              Google Verification
            </div>
            <div>
              {verify === "unverify" ? (
                <button
                  onClick={() => {
                    setOpenEn(true);
                    setVerify("unverify");
                  }}
                  className="bg-white border dark:bg-white text-black py-2 px-4 rounded-[50px] hover:bg-gray-100"
                >
                  Enable
                </button>
              ) : (
                <button
                  onClick={() => {
                    setOpenEn(true);
                    setVerify("verify");
                  }}
                  className="bg-white border dark:bg-white text-black py-2 px-4 rounded-[50px] hover:bg-gray-100"
                >
                  Disable
                </button>
              )}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="text-[16px] lg:text-[20px] flex items-center">
                Login Password
              </div>
              <div className="text-[#a2a2a2] dark:text-[#c7c7c7]">
                For account login.
              </div>
            </div>

            <div>
              <div>
                <button className="bg-white border dark:bg-white text-black py-2 px-3 rounded-[50px]">
                  Change
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-5" />
        <div className="py-6 px-2 xl:px-0 mx-auto bg-transparent rounded-2xl">
          <h2
            className="text-lg font-semibold mb-4 bg-[#D3C5E5] 
                   bg-clip-text text-transparent"
          >
            Login Activity
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="text-left text-black dark:text-white">
                  <th className="p-3">Date</th>
                  <th className="p-3">Browser</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((item, index) => (
                  <tr
                    key={index}
                    className={`relative ${index % 2 === 0
                      ? "bg-[#ffffff4D] dark:bg-[#0000004D] text-black dark:text-titleGray rounded-lg border-transparent"
                      : "bg-transparent text-black dark:text-titleGray"
                      }`}
                  >
                    <td
                      className={`p-3 whitespace-nowrap ${index % 2 === 0 ? "rounded-l-lg" : ""
                        }`}
                    >
                      {item.date}
                    </td>
                    <td className="p-3  whitespace-nowrap">{item.browser}</td>
                    <td
                      className={`p-3 whitespace-nowrap ${index % 2 === 0 ? "rounded-tr-lg" : ""
                        }`}
                    >
                      {item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-end gap-2 mt-4 text-black dark:text-titleGray">
            <div>Rows per page {rowsPerPage}</div>
            <div>
              {currentPage * rowsPerPage - rowsPerPage + 1}-
              {Math.min(currentPage * rowsPerPage, loginData.length)} of{" "}
              {loginData.length}
            </div>
            <div className="flex gap-1 ">
              <button
                className=" py-1"
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
              >
                <LeftArrowline />
              </button>
              <button
                className=" py-1 text-black dark:text-titleGray"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <LeftArrow />
              </button>
              <button
                className=" py-1 text-black dark:text-titleGray"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                <RightArrow />
              </button>
              <button
                className=" py-1 text-black dark:text-titleGray"
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
              >
                <RightArrowline />
              </button>
            </div>
          </div>
        </div>
      </div>
      {openEn && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white dark:bg-[#22282b] rounded-xl shadow-lg w-[90%] max-w-md space-y-7 lg:space-y-9">
            <div className="flex justify-between">
              {verify === "unverify" && (
                <h3 className="text-[20px] font-semibold text-black dark:text-white">
                  Google Authentication
                </h3>
              )}
              {verify === "verify" && (
                <h3 className="text-[20px] font-semibold text-black dark:text-white">
                  Disable Google Authentication
                </h3>
              )}
              <X
                onClick={handleCloseEnable}
                size={20}
                className="text-gray-900 dark:text-gray-100 cursor-pointer"
              />
            </div>

            {verify === "unverify" && (
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Install Google Authenticator app on your mobile and scan the QR
                Code. (or) If you are unable to scan, enter this code manually
                into the app.
              </p>
            )}

            <form onSubmit={handleSubmit}>
              {verify === "unverify" && (
                <>
                  {/* QR Display and Copy */}
                  <div className="flex mb-4">
                    <div className="w-4/5">
                      <input
                        name="secret"
                        placeholder="Secret Code"
                        type="text"
                        className="border border-[#c7c7c7] rounded-lg py-2 px-3 w-full"
                        value={secretValue}
                        readOnly
                      />
                    </div>
                    <div className="w-1/5 flex justify-center items-center">
                      <button type="button" onClick={handleCopy}>
                        <Copy className="text-gray-900 dark:text-gray-100" />
                      </button>
                    </div>
                  </div>
                </>
              )}

              {/* Common code input */}
              <div className="flex flex-col space-y-2 mt-6">
                <label className="text-gray-600 dark:text-gray-300">
                  Enter your code
                </label>
                <input
                  name="code"
                  placeholder="Code"
                  type="text"
                  className="border border-[#c7c7c7] rounded-lg py-2 px-3 w-full"
                />
              </div>

              <div className="flex justify-center mt-5">
                <GradientButton
                  text="Submit"
                  className="w-1/2 px-6 py-3 text-center hover:!-translate-y-0 !rounded-2xl"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
