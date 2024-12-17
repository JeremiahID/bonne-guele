import React  from "react";
import Header from "../header";
import MediaComponent from "./mediaComponent";
import SectionTwo from "../section-two";
import SectionThree from "../section-three";
import mediaHero from "./mediaHero.webp"
import Hero from "../hero";
import NewsLetter from "./newsletter-media.jpeg"
import Footer from "../footer";

function Media(){
    return (
        <div>
            <Header />

            <Hero 
                Hero = {mediaHero}
            />
            
            <MediaComponent />

            <SectionTwo />

            <SectionThree img = {NewsLetter}/>

            <Footer />
        </div>
    )

};

export default Media;