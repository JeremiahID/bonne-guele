import React from "react";
import FormEmail from "../../Components/form-email";
import SvgEmailLogo from "../../Images/emailLogo.svg"


function SectionThree(props){
    return (
        <div className="boutiques-container  flex mt-4">
            <div className="boutiques row">
                <div className=" boutiques-content  p-0 col-md-6  col-12 ">
                    <img src={props.formImage} alt="boutiques-image" className="" />
                </div>
                <div className=" boutiques-content p-0 col-md-6 col-12 bg-blue">
                    <FormEmail 
                        logoEmail = {SvgEmailLogo}
                        name = "Keep up to date with our upcoming collections"
                        textContent = 'You will know everything before anyone else.'
                    />

                </div>
            </div>

        </div>
    )
};

export default SectionThree;