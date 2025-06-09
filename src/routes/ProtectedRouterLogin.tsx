import { Outlet, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useRef } from "react";

function ProtectedRouterLogin() {
    const userToken = localStorage.getItem("alphaswap");
    const hasToasted = useRef(false);

    useEffect(() => {
        if (!userToken && !hasToasted.current) {
            setTimeout(() => {
                toast.dismiss();
                toast.error("Please login to continue");
            }, 300);
            hasToasted.current = true;
        }
    }, [userToken]);

    return userToken ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRouterLogin;