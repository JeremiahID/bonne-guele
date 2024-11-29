import React from "react";
import heroImage from '../Images/hero.webp';



function Hero(){
    return(
        <div className="hero-wrapper d-flex">
           <div className="hero">
            <img  src={heroImage} alt="hero-image"  />
           </div>
        </div>
    )
}




export default Hero;