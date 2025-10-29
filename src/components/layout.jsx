import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Menu from "./navBar";


const Layout = () => {
    const location = useLocation();

    const showMenu = loaction.pathname !== '/';


    return (
        <>
            {showMenu && <Menu />}
            <Outlet />
        </>
    )
}

export default Layout;