import React from "react";


function FormEmail(props){
    return (
        <div className="form ">
            <form action="" method="post" className="flex flex-column  boutiques-content-left inherit">

                <img src={props.logoEmail} alt="B-image" className="email_logo" />
               
                <h3  className="text-uppercase fs-4 text-white">{props.name}</h3>

                <p className="p-4 text-white">{props.textContent}</p>

                <input type="email" name="" id="email" placeholder="email" />

                <button className="btn " type="submit"> Register </button>


            </form>
        </div>
    )
}



export default FormEmail;