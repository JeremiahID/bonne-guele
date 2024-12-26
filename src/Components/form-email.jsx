import React from "react";

//  This is 
function FormEmail(props){
    return (
        <div className="form ">
            <form action="" method="post" className="flex flex-column  boutiques-content-left inherit">

               <div className="email_logo">
                     <img src={props.logoEmail} alt="B-image" className="" />
               </div>
               
                <h3  className=" p-4 text-uppercase fs-4 text-white">{props.name}</h3>

                <p className="p-2 text-white">{props.textContent}</p>

                <input type="email" name="" id="email" placeholder="Email" className="input_email rounded rounded-2" />

                <button className="btn button_email mt-5 rounded-5 p-2" type="submit"> Register </button>


            </form>
        </div>
    )
};

export default FormEmail;