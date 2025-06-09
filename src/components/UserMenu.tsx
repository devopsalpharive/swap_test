import { useState, useEffect, useRef } from "react";
import {  User } from "lucide-react";
import IconCard from "../UIComponents/IconCard";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


const UserMenu = () => {
  const navigate = useNavigate();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const handleLogout = () => {
    localStorage.removeItem("alphaswap")
    setTimeout(() => {
      toast.success("Logged out!");
    },500);
    // window.location.href = "/login";
    navigate("/login");
    setIsUserMenuOpen(false);
    console.log("Logged out!");
  };
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative cursor-pointer">
      <ToastContainer/>
      {/* User Icon - Opens the Menu on Hover */}
      <div onMouseEnter={() => setIsUserMenuOpen(true)}>
        <IconCard Icon={User} />
      </div>
      {isUserMenuOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 p-[1px] rounded-lg bg-[#D3C5E5] mt-3"
        >
          <div className="bg-white dark:bg-[#121517] rounded-md w-[110px]">
            <ul className=" text-gray-700 dark:text-gray-200 space-y-1 py-2">
              <li
                onClick={() => navigate("/profile")}
                className="relative z-10 flex gap-7 hover:bg-sky-200 dark:hover:bg-gray-700 cursor-pointer text-[10px] font-[550] pl-3 py-1"
              >
                Account Setting
              </li>
              <li
                onClick={() => navigate("/support")}
                className="relative z-10 flex gap-7 hover:bg-sky-200 dark:hover:bg-gray-700 cursor-pointer text-[10px] font-[550] pl-3 py-1"
              >
                Support Ticket
              </li>
              {/* <li
                onClick={() => navigate("/profile")}
                className="relative z-10 flex gap-7 hover:bg-sky-200 dark:hover:bg-gray-700 cursor-pointer text-[10px] font-[550] pl-3 py-1"
              >
                Edit Profile
              </li> */}
              <li
                onClick={() => handleLogout()}
                className="relative z-10 flex gap-7 hover:bg-sky-200 dark:hover:bg-gray-700 cursor-pointer text-[10px] font-[550] pl-3 py-1"
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
