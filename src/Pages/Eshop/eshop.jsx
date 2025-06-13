import React from "react";
import Hero from "../../Components/hero";
import EshopHero from "../../Images/eshophero.webp"
import hoverImage from "../../Images/hero.webp"
import { Link } from "react-router-dom";
import SectionTwo from "../Home/section-two";
import SectionThree from "../Home/section-three";
import Footer from "../../Components/footer";
import newsLetter from "../../Images/newsletter.jpg"

function Eshop(props){
    return(
        <div>
          <Hero  heroImage = {EshopHero}  buttonText = "FIND OUT" />  

          <div className="collectionHero  d-flex" >
            <div className="collection-hero-wrapper d-flex justify-content-center align-items-end">
                <button type="button" className=" my-4 eshop-hero-button">
                    <Link to="" className=" hero-link text-decoration-none text-white fw-bolder tracki "> 
                        SEE THE COLLECTION
                    </Link>
                </button>
            </div>
          </div>

            <SectionTwo />

            <SectionThree  
                formImage = {newsLetter}
            />

            <Footer />



        </div>
    )
};


export default Eshop;