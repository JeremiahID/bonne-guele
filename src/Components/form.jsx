import React from "react";
import Btn from "./button";

function Form(props){
    return(
        <div className="form ">
            <form action="" method="post" className="flex flex-column  boutiques-content-left inherit">
               
                <h1  className="text-uppercase fw-light text-start">{props.name}</h1>
                <p className="px-4">{props.textContent}</p>
                <Btn 
                    innerText = 'OUR STORES'
                />
                <Btn 
                    innerText = 'MAKE AN APPIONTMENT'
                />


            </form>
        </div>
    )
};

export default Form;