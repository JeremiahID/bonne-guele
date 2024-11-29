import React from 'react';
import cartIcon from '../Images/cart.svg';
import contactIcon from '../Images/contact.svg';
import searchIcon from '../Images/search.svg';

function carticon(){
    console.log('test')
}



function Svg(){
    return (
        <div className='d-flex svg-container'>

        <img  className ='svg' src={searchIcon} alt="cartIcon"  />
        
        <img  className ='svg' src={contactIcon} alt="cartIcon"  />

         <img  className ='svg' src={cartIcon} alt="cartIcon"  />
              
        </div>
    )
};


export default Svg;