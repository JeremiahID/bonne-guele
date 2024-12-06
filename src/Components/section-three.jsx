import React from "react";
import Form from "./form";

function SectionThree(props){
    return (
        <div className="boutiques-container  flex mt-4">
            <div className="boutiques row">
                <div className=" boutiques-content  p-0 col-6  ">
                    <img src={props.img} alt="boutiques-image" className="" />
                </div>
                <div className=" boutiques-content p-0 col-6 bg-dark">

                </div>
            </div>

        </div>
    )
};

export default SectionThree;