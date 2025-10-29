import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const HeaderandFooter = () => {
    return (
        <div>
            <Header />
            <div className="main-content">
            <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default HeaderandFooter;