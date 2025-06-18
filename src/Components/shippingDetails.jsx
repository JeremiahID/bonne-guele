import React from "react";

function Details(props){
    return (
        <div className=" details-content col-md-3 col-sm-6 col-12 flex justify-content-evenly flex-column">
            
            <img className="details-img" src={props.svg} alt="svg"  />
            
            <h1>{props.name}</h1>

            <p >{props.innerText}</p>

        </div>
    )
};

export default Details;

