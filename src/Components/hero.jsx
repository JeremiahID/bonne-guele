import React from "react";
import heroImage from '../Images/hero.webp';
import heroImag from '../Images/lookbook-sec-seven.webp';



function Hero(){
    return(
        <div className="hero-wrapper d-flex">
           <div className="hero">
            <img  src={heroImag} alt="hero-image"  />
           </div>
        </div>
    )
}




export default Hero;