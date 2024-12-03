import React from "react";

function Details(props){
    return (
        <div className=" details-content col-3 border border-1 flex justify-content-evenly flex-column">
            
            <img className="details-img" src={props.svg} alt="svg" srcset="" />
            
            <h1>{props.name}</h1>

            <p >{props.innerText}</p>

        </div>
    )
};


export default Details;

