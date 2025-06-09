import React  from "react";
import Hero from "../../Components/hero";
import MediaComponent from "./mediaComponent";
import SectionTwo from "../Home/section-two";
import SectionThree from "../Home/section-three";
import Footer from "../../Components/footer";
function Media(){
    return (
        <div>

            <Hero />
        
            <MediaComponent />
        
            <SectionTwo />

            <SectionThree />

            <Footer />
        </div>
    )

};

export default Media;