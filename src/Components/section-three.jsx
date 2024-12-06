import React from "react";
import FormEmail from "./form-email";
import SvgEmailLogo from "../Images/emailLogo.svg"

function SectionThree(props){
    return (
        <div className="boutiques-container  flex mt-4">
            <div className="boutiques row">
                <div className=" boutiques-content  p-0 col-6  ">
                    <img src={props.img} alt="boutiques-image" className="" />
                </div>
                <div className=" boutiques-content p-0 col-6 bg-blue">
                    <FormEmail 
                        // logoEmail = {SvgEmailLogo}
                        name = "Keep up to date with our upcoming collections"
                        textContent = 'You will know everything before anyone else.'
                    />

                </div>
            </div>

        </div>
    )
};

export default SectionThree;