import React from "react";
import Hero from "../../Components/hero";
import EshopHero from "../../Images/eshophero.webp"
import { Link } from "react-router-dom";

function Eshop(props){
    return(
        <div>
          <Hero  heroImage = {EshopHero} buttonText = "FIND OUT" />  

          <div className="collectionHero  d-flex" >
            <div className="collection-hero-wrapper d-flex justify-content-center align-items-end">
                <button type="button" className=" my-4 eshop-hero-button">
                    <Link to="" className=" hero-link text-decoration-none text-white fw-bolder tracki "> 
                        SEE THE COLLECTION
                    </Link>
                </button>
            </div>
          </div>

            

        </div>
    )
};


export default Eshop;