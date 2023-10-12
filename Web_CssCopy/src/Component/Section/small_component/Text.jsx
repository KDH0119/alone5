import React from "react";
import "./Text.css";

function Text({arr}){
    return <>
        <div className="text_aaa">
            {
                arr.map(value => {
                    return(
                        <div className="map_text">
                        <img className="text_imggg" src="/section_marinade_image/check.png" alt="check"></img>
                        <h3 className="h3_text">{value}</h3>
                        </div>
                    );
                })
            }

            
        </div>
    </>
}

export default Text;