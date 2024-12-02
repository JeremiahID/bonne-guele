import React from "react";
import boutiques from '../Images/boutiques.jpg'

function Section(){
    return (
        <div className="boutiques-container  flex mt-4">
            <div className="boutiques row">
                <div className=" boutiques-content  p-0 col-8  ">
                    <img src={boutiques} alt="boutiques-image" className="" />
                </div>
                <div className=" boutiques-content col-4 bg-danger-subtle">
                   
                </div>

            </div>

        </div>
    )
}




export default Section;