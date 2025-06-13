import React from "react";
import { Link } from "react-router-dom";

function Hero(props){
    return(
        <div className="hero-wrapper d-flex  ">
           <div className="hero">
            <img  src={props.heroImage} alt="hero-image"  />
            <button type="button" className=" hero-button ">
                <Link to="" className=" hero-link text-decoration-none text-white fw-bolder tracki "> 
                    {props.buttonText}
                </Link>
            </button>

           </div>
        </div>
    )
};

export default Hero;