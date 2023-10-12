import React from "react";
import "./Liquidity.css";
import recycle from "../marinade_image/recycle.png";
function Liquidity() {
    return <>
        <div className="liquidityDiv">
            <a href="#" className="aliquidity"><img className="recyecle" src={recycle} alt="recycle"></img><span className="liquidity">Liquidity</span></a>
        </div>
    </>
}

export default Liquidity;