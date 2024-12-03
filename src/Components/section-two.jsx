import React from "react";
import Details from "./shipping";
import web from '../Images/web.svg';
import loop from '../Images/loop.svg';
import creditcard from '../Images/credit-card.svg';
import chat from '../Images/chat.svg';




function SectionTwo(){

    return(
        <div className="details my-5 row flex ">
            <Details 
                svg = {web}
                name = 'FREE SHIPPING'
                innerText = 'Across The African Union From 200$  purchase'
            />
            <Details 
                svg = {loop}
                name = 'FREE RETURNS'
                innerText = 'Across The African Union From 200$  purchase'
            />
            <Details
                svg = {creditcard}
                name = 'CREDIT CARDS'
                innerText = 'Across The African Union From 200$  purchase'
            
            />
            <Details 
                svg = {chat}
                name = 'EXPRESS CUSTOMER SERVICE'
                innerText = 'Across The African Union From 200$  purchase'     
            />


        </div>
    )
};


export default SectionTwo;