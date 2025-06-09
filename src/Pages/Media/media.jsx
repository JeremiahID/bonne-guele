import React  from "react";
import Hero from "../../Components/hero";
import MediaComponent from "./mediaComponent";
import SectionTwo from "../Home/section-two";
import SectionThree from "../Home/section-three";
import Footer from "../../Components/footer";
import MediaHero from "../../Images/hero.webp"

function Media(){
    return (
        <div>

            <Hero 
                heroImage = {MediaHero}
            />
        
            <MediaComponent />
        
            <SectionTwo />

            <SectionThree />

            <Footer />
        </div>
    )

};

export default Media;