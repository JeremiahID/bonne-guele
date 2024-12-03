import React from 'react';
import cartIcon from '../Images/cart.svg';
import contactIcon from '../Images/contact.svg';
import searchIcon from '../Images/search.svg';


function Svg(){
    return (
        <div className='d-flex svg-container'>

        <img  className ='svg' src={searchIcon} alt="searchIcon"  />
        
        <img  className ='svg' src={contactIcon} alt="contactIcon"  />

         <img  className ='svg' src={cartIcon} alt="cartIcon"  />
              
        </div>
    )
};


export default Svg;