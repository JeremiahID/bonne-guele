import React from "react";
import Form from "../../Components/form";
import Boutique from '../../Images/boutiques.jpg'

function Section(props){
    return (
        <div className="boutiques-container  flex mt-4">
            <div className="boutiques  row bg-gradient ">
                <div className=" boutiques-content boutiques-content-img  p-0 col-md-8 col-12  ">
                    <img src={Boutique} alt="boutiques-image" className="" />
                </div>
                <div className=" boutiques-content p-0 col-md-4 col-12 ">
                   <Form  
                        name = 'Our Store'
                        textContent = 'Real living spaces in which we like to meet you listen to you and advise you And even better: we dedicate our full attention to you during a personal appointment.An hour just for you in the shop of your choice.'
                   />
                </div>
            </div>

        </div>
    )
};

export default Section;