import React from "react";
import "./Section.css";
import "./small_component/SolanaStakingWidget";
import SolanaStakingWidget from "./small_component/SolanaStakingWidget";
import Strategies from "./small_component/Strategies";

function Section(){
    const arr = ["139 best-performing validators", "Automated stake rebalancing",
                 "Liquid staked SOL token to use with 20+ DeFi integrations"];
    const arr2 = ["139 best-performing validators", "Automated stake rebalancing",
                 "No smart contract exposure"];
    return (
        <>
            <div className="section">
                <h2 className="mainStaking">Staking</h2>
                <div className="up">
                    <SolanaStakingWidget></SolanaStakingWidget>
                </div>
                <h2 className="recommended">Recommended strategies</h2>
                <div className="down">
                    <Strategies class_Name="white-dashboard-2" 
                     imgSrc = "/section_marinade_image/mSOL.svg" 
                     logoText="Liquid staking" 
                     explanation="Unlock stake liquidity for DeFi" 
                     apy = "7.59%" 
                     arr = {arr}
                     ></Strategies>
                    <Strategies class_Name="white-dashboard-3" 
                     imgSrc = "/section_marinade_image/marinade_black.svg" 
                     logoText="Native staking" 
                     explanation="Automatic stake delegation" 
                     apy = "8.03%" 
                     arr = {arr2}></Strategies>
                </div>
            </div>
        </>
    );
}

export default Section;