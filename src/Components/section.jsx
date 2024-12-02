import React from "react";
import boutiques from '../Images/boutiques.jpg'

function Section(){
    return (
        <div className="boutiques-container flex">
            <div className="boutiques  row">
                <div className=" boutiques-content col-7  ">
                    <img src={boutiques} alt="boutiques-image" className="" />
                </div>
                <div className=" boutiques-content col-5 bg-danger-subtle">
                   
                </div>

            </div>

        </div>
    )
}




export default Section;