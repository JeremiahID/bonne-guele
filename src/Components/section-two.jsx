import React from "react";
import Details from "./shipping";
import shippingStorage from "./shippingcontainer";


// creating the function to be pass into the map method.
function shippingItems(items){
    return <Details 
        svg = {items.svg}
        name = {items.name}
        innerText = {items.innerText}
    />
};



function SectionTwo(){
    return(
        <div className="details my-4 row flex text-center ">

            {/* USING THE MAP METHOD */}
            {shippingStorage.map(shippingItems)}

        </div>
    )
};

export default SectionTwo;