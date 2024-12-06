import React from "react";
import Hero from "./hero";
import Header from "./header";
import Footer from "./footer";
import Section from "./section";
import SectionTwo from "./section-two";
import boutiques from '../Images/boutiques.jpg';
import newsletter from '../Images/lookbook-sec-eight.webp';
import '../css/App.css';




function App(){
    return (

        <div className=" ">
            <Header />
            <Hero />
            <Section 
                img = {boutiques}
            />
            <SectionTwo />
            <Section 
                img = {newsletter}
            />
            <Footer />
        </div>
    )
}

export default App;