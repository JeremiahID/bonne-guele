import React from "react";
import boutiques from '../Images/boutiques.jpg'
import Form from "./form";

function Section(){
    return (
        <div className="boutiques-container  flex mt-4">
            <div className="boutiques row">
                <div className=" boutiques-content  p-0 col-8  ">
                    <img src={boutiques} alt="boutiques-image" className="" />
                </div>
                <div className=" boutiques-content p-0 col-4 bg-danger-subtle">
                   <Form  
                        name = 'Our Store'
                        textContent = 'Real living spaces in which we like to meet you,
                                        listen to you and advise you. And even better: we dedicate our full attention to
                                        you during a personal appointment.
                                        An hour just for you in the shop of your choice'
                   />
                </div>

            </div>

        </div>
    )
}




export default Section;