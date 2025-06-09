// import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginBtn: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const [theme, setTheme] = useState<boolean>(false);

  const pathname: string = location.pathname;

  return (
    <div className="flex bg-[#FCFCFD] dark:bg-[#23262F] p-1 rounded-md">

      <button
        className={`w-full px-6 py-2 rounded-md transition-all duration-300 ${pathname === '/login'
          ? "bg-gradient-primary text-[#FCFCFD]"
          : "bg-transparent text-black dark:text-txtDark"
          }`}
        onClick={() => navigate('/login')}
      >
        Login
      </button>

      <button
        className={`w-full px-6 py-2 rounded-md transition-all duration-300 ${pathname === '/register'
          ? "bg-gradient-primary text-[#FCFCFD]"
          : "bg-transparent text-black dark:text-txtDark"
          }`}
        onClick={() => navigate('/register')}
      >
        Register
      </button>
    </div>
  );
};

export default LoginBtn;
