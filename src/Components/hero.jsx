import React from "react";
import HeroImage from '../Images/hero-brown.webp'

function Hero(){
    return(
        <div className="hero-wrapper d-flex">
           <div className="hero">
            <img  src={HeroImage} alt="hero-image"  />
           </div>
        </div>
    )
};

export default Hero;