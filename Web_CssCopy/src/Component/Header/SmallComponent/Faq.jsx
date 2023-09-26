import React from "react";
import "./Faq.css";
import img from "../marinade_image/물음표.png";

function Faq() {
  return (
    <>
      <div className="faqDiv">
        <a className="afaq" href="#">
          <img src={img} alt="FAQ" className="FAQ"></img>
        </a>
      </div>
    </>
  );
}

export default Faq;
