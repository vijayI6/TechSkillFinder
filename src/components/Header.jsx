import React from "react";
import logo from "../attachments/logotext.png";
import "./Header.css";


const Header = () => {
    return (
        <div>
            <div className="navbar">
                <img src={logo} alt="logo" className="logo" />
                <div className="nav-right">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Help</a>
                </div>
            </div>
        </div>
    );
};

export default Header;