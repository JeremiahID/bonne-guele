import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Hero(props){
    const [imgSrc, setImgSrc] = useState(props.heroImage);


    return(
        <div className="hero-wrapper d-flex  ">
           <div className="hero">
            <img  
                src={imgSrc} 
                alt="hero-image"  
                // onMouseOver={() => setImgSrc(props.hoverImage)}
                // onMouseOut={() => setImgSrc(props.heroImage)}
             />
            {/* <button type="button" className=" hero-button ">
                <Link to="" className=" hero-link text-decoration-none text-white fw-bolder tracki "> 
                    {props.buttonText}
                </Link>
            </button> */}

           </div>
        </div>
    )
};

export default Hero;


