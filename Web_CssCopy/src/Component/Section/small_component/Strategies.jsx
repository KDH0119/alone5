import React from "react";
import "./Strategies.css";
import Button from "./button";
import Text from "./Text";
function Strategies({class_Name, imgSrc, logoText, explanation, apy, arr}){
    return <>
        <div className={class_Name}>
            <img className="logo_img" src={imgSrc} alt="logoimg"></img>
            <h3 className="h3_logoText">{logoText}</h3>
            <p className="p_logoText">{explanation}</p>
            <h3 className="apy">APY</h3>
            <h1 className="h1_apy">{apy}</h1>
            <div className="str_btn">
                <Button btnSrc="/section_marinade_image/바로가기.png" 
                        width="36.2%" contect="Stake"></Button>
            </div>       
            <h2 className="h2_what">What's in this product:</h2>
            <Text arr={arr}></Text>
        </div>
    </>
}

export default Strategies;