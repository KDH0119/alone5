import React from "react";
import "./Footer.css";

function Footer(){
    return <>
        <div className="footer">
            <div className="white"></div>
            <div className="left-right">
                <div className="footer-left">
                    <div className="footer-contect">
                        <a className="footer-a" href="#">
                            <img className="footer-logo" src="/footer_marinade_image/Logo.svg" alt="logo"></img>
                        </a>
                        <p className="footer-p">Marinade.Finance is a non-custodial liquid staking protocol built <br></br> on the Solana blockchain.</p>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="menu1">
                        <h3>Products</h3>
                        <a href="#"><p className="menu-p">Solana Staking</p></a>
                        <a href="#"><p className="menu-p">mSOL in Defi</p></a>
                        <a href="#"><p className="menu-p">Validators on Solana</p></a>

                    </div>
                    <div className="menu2">
                        <h3>Governance</h3>
                        <a href="#"><p className="menu-p">MNDE</p></a>
                        <a href="#"><p className="menu-p">Vote</p></a> <img className="Vote-img" src="/footer_marinade_image/바로가기.png"></img>
                        <a href="#"><p className="menu-p">Forum</p></a>  <img className="Forum-img" src="/footer_marinade_image/바로가기.png"></img>
                    </div>
                    <div className="menu3">
                        <h3>Learn</h3>
                        <a href="#"><p className="menu-p">Documentation</p></a>  <img className="Documentation-img" src="/footer_marinade_image/바로가기.png"></img>
                        <a href="#"><p className="menu-p">Blog</p></a>
                        <a href="#"><p className="menu-p">Security</p></a>  <img className="Security-img" src="/footer_marinade_image/바로가기.png"></img>
                    </div>
                </div>
                <div className="sns-img">
                    <a href="#"><img className="sns-logo" src="/footer_marinade_image/Discord.png" alt="logo"></img></a>
                    <a href="#"><img className="sns-logo" src="/footer_marinade_image/twitter.png" alt="logo"></img></a>
                    <a href="#"><img className="sns-logo" src="/footer_marinade_image/M.png" alt="logo"></img></a>
                    <a href="#"><img className="sns-logo" src="/footer_marinade_image/Youtube.png" alt="logo"></img></a>
                </div>
            </div> 
        </div>
    </>
}

export default Footer;