import React from "react";
import "./Header.css";
import Faq from "./SmallComponent/Faq";
import ConnectWallet from "./SmallComponent/ConnectWallet";
import Staking from "./SmallComponent/Staking";
import Liquidity from "./SmallComponent/Liquidity";
import Earn from "./SmallComponent/Earn";
import Logo from "./SmallComponent/Logo";
import "./SmallComponent/global.css";

function Header() {
  return (
    <>
      <div className="wrap">
        <div className="left">
          <Logo></Logo>
        </div>
        <div className="middle">
          <Staking></Staking>
          <Liquidity></Liquidity>
          <Earn></Earn>
        </div>
        <div className="right">
          <Faq></Faq>
          <ConnectWallet></ConnectWallet>
        </div>
      </div>
    </>
  );
}

export default Header;
