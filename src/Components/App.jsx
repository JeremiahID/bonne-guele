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
import close from "../Images/close-cart.svg"
import cart from "../Images/cart.svg"

import '../css/App.css';


function App(){
    return (

        <div className="">

            <div className="cart-wrapper position-absolute top-0 end-0 no-scroll" >
                <div className="cart-container  position-absolute top-0 end-0 ">
                    <div className="cart-head flex ">
                        <div className="cart-icons-container bg-success-subtle flex justify-content-between  ">
                            <div className="cart-logo flex justify-content-evenly "> 
                                <img className=" close-cart-icon cart-icon " src={cart} alt="close cart icon" /> 
                                <div className="cart-name bg-white flex  w-75">
                                    <p className="text-capitalize fw-bold bg-danger ">cart</p>
                                </div>
                            </div>


                            <div className="close-cart">
                                {/* <!-- CLOSE CART --> */}
                                <img className=" close-cart-icon cart-icon" src={close} alt="close cart icon" />
                            </div>
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