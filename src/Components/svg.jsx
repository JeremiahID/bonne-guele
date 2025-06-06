import React from 'react';
import cartIcon from '../Images/cart.svg';
import contactIcon from '../Images/contact.svg';
import searchIcon from '../Images/search.svg';

// const cartContent = props.cart



function Svg(props){
    return (
        <div className='d-flex svg-container'>
            <button className='svg-button'>
                 <img  className ='svg' src={searchIcon} alt="searchIcon"  />
            </button>

            <button className='svg-button' >
                <img  className ='svg' src={contactIcon} alt="contactIcon"  />
            </button>
        
            <button className='svg-button' onClick = {props.openCart} >
                <img  className ='svg' src={cartIcon} alt="cartIcon" />
            </button>
              
        </div>
    )
};

export default Svg;