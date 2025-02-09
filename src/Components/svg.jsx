import React from 'react';
import cartIcon from '../Images/cart.svg';
import contactIcon from '../Images/contact.svg';
import searchIcon from '../Images/search.svg';

const cartContent = props.cart

function openCart(){
    if (cartContent.style.display === "none"){
        cartContent.style.display = "block";
    } else {
        cartContent.style.display = "none";
    }

    console.log("cliked")
}

function Svg(){
    return (
        <div className='d-flex svg-container'>

        <img  className ='svg' src={searchIcon} alt="searchIcon"  />
        
        <img  className ='svg' src={contactIcon} alt="contactIcon"  />

         <img  className ='svg' src={cartIcon} alt="cartIcon"  onClick = {openCart}/>
              
        </div>
    )
};

export default Svg;