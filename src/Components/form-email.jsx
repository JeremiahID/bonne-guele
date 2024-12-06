import React from "react";


function FormEmail(props){
    return (
        <div className="form ">
            <form action="" method="post" className="flex flex-column  boutiques-content-left inherit">

               <div className="email_logo">
                     <img src={props.logoEmail} alt="B-image" className="" />
               </div>
               
                <h3  className=" p-4 text-uppercase fs-4 text-white">{props.name}</h3>

                <p className="p-2 text-white">{props.textContent}</p>

                <input type="email" name="" id="email" placeholder="email" />

                <button className="btn " type="submit"> Register </button>


            </form>
        </div>
    )
}



export default FormEmail;