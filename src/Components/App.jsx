import React from "react";
import Hero from "./hero";
import Header from "./header";
import Footer from "./footer";
import Section from "./section";
import SectionTwo from "./section-two";
import '../css/App.css';




function App(){
    return (

        <div className=" ">
            <Header />
            <Hero />
            <Section />
            <SectionTwo />
            <Footer />
        </div>
    )
}

export default App;