import React from "react";
import "./Button.css";

function Button({btnSrc,width,contect}){
    console.log(btnSrc);
    return <>
        <div style={{
            width: {width}
        }}className="function-btn">
            <a href="#" className="btn-a">
                <img className="wallet-img" src={btnSrc} alt="지갑"></img>
                <span className="span-btn">{contect}</span>
            </a>
        </div>
    </>
}

export default Button;