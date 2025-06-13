 import React from "react";
 import Hero from "../../Components/hero";
 import Section from "./section";
 import SectionTwo from "./section-two"
 import SectionThree from "./section-three"
 import Footer from "../../Components/footer"
 import HomeHero from "../../Images/hero-brown.webp"
 import newsLetter from "../../Images/newsletter.jpg"




 function Home (){
    return (
        <>
            <Hero  
                heroImage = {HomeHero}
                buttonText = "HOME"
            />

            <Section />

            <SectionTwo />

            <SectionThree 
                formImage = {newsLetter}
            />

            <Footer />
        </>
    )
 }


 export default Home;