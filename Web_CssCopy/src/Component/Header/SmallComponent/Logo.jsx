import React from "react";
import "./Logo.css";
import logo from "../marinade_image/Logo.svg";
function Logo(){
    return <>
        <div className="logoDiv">
            <a className="alogo" href="#"><img className="logo" src={logo} alt="로고"></img></a>
        </div>
    </>
}

export default Logo;