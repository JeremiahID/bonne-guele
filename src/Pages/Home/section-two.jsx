import React from "react";
import Details from "../../Components/shippingDetails";
import shippingStorage from "../../Components/shippingcontainer";

function SectionTwo(){
    return(
        
        <div className="details my-4 row flex text-center">

            {/* USING THE MAP METHOD */}
            {shippingStorage.map(items =>{
                return <Details 
                        key = {items.id}
                        {...items}
                    />
            })};

        </div>

    );
    
};

export default SectionTwo;