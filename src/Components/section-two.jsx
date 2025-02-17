import React from "react";
import Details from "./shipping";
import shippingStorage from "./shippingcontainer";


function SectionTwo(){
    return(
        <div className="details my-4 row flex text-center">

            {/* USING THE MAP METHOD */}
            {shippingStorage.map(items =>{
                return <Details 
                        key = {items.id}
                        svg = {items.svg}
                        name = {items.name}
                        innerText = {items.innerText}
                    />
            })};

        </div>
    );
};

export default SectionTwo;