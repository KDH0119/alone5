import React from "react";
import "./SolanaStakingWidget.css";
import Button from "./button";

function SolanaStakingWidget(){
    return <>
        <div className="white-dashboard">
            <div className="title">
                <h2 className="ahffk">All you ever need in one <br></br> place for <span className="nameahffk">Solana Staking</span></h2>
            </div>
            <div className="content">
                <p>Start staking SOL, review your existing stake, and unstake at <br></br> any time, for the best price.</p>
            </div>
            <div className="btn-list">
                <Button btnSrc="/section_marinade_image/지갑.png" width="36.2%" contect="Connect wallet"/>
                <button className="dont-wallet">I don't have a wallet</button>
            </div>
        </div>
    </>
}



export default SolanaStakingWidget;