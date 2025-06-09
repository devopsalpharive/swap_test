
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const RegistrationSuccess = () => {
  const navigate = useNavigate();



  return (
    <div className="relative w-full h-screen bg-cover bg-center flex items-center justify-center bg-[url('/src/assets/images/bg.png')] dark:bg-[url('/src/assets/images/darkbg.png')]">

<div className="flex flex-col bg-[#FFFFFF80] backdrop-blur-lg align-center justify-center text-center dark:bg-[#18191D80] border dark:border-[#23262F99] border-[#FFFFFF99] rounded-lg p-6 w-full max-w-lg  dark:text-white">
 
   
      <CheckCircle size={80} className="text-green-500 mx-auto" />
      
      <h2 className="text-2xl font-semibold mt-4">Registration Successful!</h2>
      <p className="text-gray-400 mt-2">You will be redirected shortly...</p>

      <button
        onClick={() => navigate("/login")}
        className="w-48 mx-auto mt-3 lg:mt-9 bg-[#D3C5E5] text-white transition-all p-3 rounded-lg">
      
        Go to Login
      </button>
    </div>
    </div>
  );
};

export default RegistrationSuccess;
