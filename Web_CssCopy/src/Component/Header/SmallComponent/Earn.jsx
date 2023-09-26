import React from "react";
import "./Earn.css";
import sm from "../marinade_image/선물.png";
function Earn(){
    return <>
        <div className="earnDiv">
            <a className="aearn" href="#"><img className="sm" src={sm} alt="선물"></img><span className="Earn">Earn</span></a>
        </div>
    </>
}

export default Earn;