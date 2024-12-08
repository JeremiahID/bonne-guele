import React from "react";
import Hero from "./hero";
import Header from "./header";
import Footer from "./footer";
import Section from "./section";
import SectionTwo from "./section-two";
import SectionThree from "./section-three";
import boutiques from '../Images/boutiques.jpg';
import newsletter from '../Images/newsletter.jpg';
import '../css/App.css';


function App(){
    return (

        <div className=" ">
            {/* the header */}
            <Header />

            {/* The hero image */}
            <Hero />

            {/* The first section */}
            <Section 
                img = {boutiques}
            />

            {/* The section section */}
            <SectionTwo />

            {/* The second Section */}
            <SectionThree 
                img = {newsletter}
            />

            {/* The footer section */}
            <Footer />
            
        </div>
    )
}

export default App;