import React from "react";
import Hero from "./hero";
import Header from "./header";
import Footer from "./footer";
import Section from "./section";
import '../css/App.css';




function App(){
    return (

        <div className=" ">
            <Header />
            <Hero />
            <Section />
            <Footer />
        </div>
    )
}

export default App;