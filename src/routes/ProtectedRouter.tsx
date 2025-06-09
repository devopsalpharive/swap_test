import { Outlet, Navigate } from "react-router-dom";


function ProtectedRouter() {
    const userToken = localStorage.getItem("alphaswap")

    return userToken ? (
        <Navigate to={"/home"} />
    ) : (
        <Outlet />
    )
}

export default ProtectedRouter;