import React from "react";


function Hero(props){
    return(
        <div className="hero-wrapper d-flex">
           <div className="hero">
            <img  src={props.Hero} alt="hero-image"  />
           </div>
        </div>
    )
};

export default Hero;