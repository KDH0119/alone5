import React from "react";
import "./Staking.css";
import Money from "../marinade_image/Money.png";

function Staking(){
    return <>
        <div className="stakingDiv">
            <a className="astaking" href="#">
                <img className="money" src={Money} alt="money"></img>
                <span className="staking">Staking</span>
                </a>
        </div>
    </>
}

export default Staking;