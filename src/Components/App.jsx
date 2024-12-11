import React from "react";
import Media from "./Media/media";
import Hero from "./hero";
import Header from "./header";
import Footer from "./footer";
import Section from "./section";
import SectionTwo from "./section-two";
import SectionThree from "./section-three";
import boutiques from '../Images/boutiques.jpg';
import newsletter from '../Images/newsletter.jpg';
import HomeHero from '../Images/hero-brown.webp';

import '../css/App.css';


function App(){
    return (

        <div className=" overflow-hidden">

            <div className="cart-wrapper position-absolute top-0 end-0 no-scroll" >
                <div className="cart-container  position-absolute top-0 end-0 ">
                    <div className="cart-head">
                        <div className="cart-logo">

                        </div>


                        <div className="close-cart">
                            
                        </div>
                    </div>

                </div>

            </div>
            {/* the header */}
            {/* <Header /> */}

            {/* The hero image */}
            {/* <Hero 
                Hero = {HomeHero}
            /> */}

            {/* The first section */}
            {/* <Section img = {boutiques}/> */}

            {/* The section section */}
            {/* <SectionTwo /> */}

            {/* The second Section */}
            {/* <SectionThree img = {newsletter}/> */}

            {/* The footer section */}
            {/* <Footer /> */}

            {/* <Media /> */}
            
        </div>
    )
}

export default App;