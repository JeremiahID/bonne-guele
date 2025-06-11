import React from 'react';
import cartIcon from '../Images/cart.svg';
import contactIcon from '../Images/contact.svg';
import searchIcon from '../Images/search.svg';
import { Link } from "react-router-dom";
import Login from '../Auth/Login';
import { Route, Routes } from "react-router-dom";

function Svg(props){
    return (
        <div className='d-flex svg-container'>
            <button className='svg-button' onClick={props.openSearch}>
                 <img  className ='svg' src={searchIcon} alt="searchIcon"  />
            </button>

            <button className='svg-button' onClick={props.openAccount}>
                <Link to="/login"  >
                    <img  className ='svg' src={contactIcon} alt="contactIcon"  />
                </Link>
            </button>
        
            <button className='svg-button' onClick={props.openCart} >
                <img  className ='svg' src={cartIcon} alt="cartIcon" />
            </button>

            <Routes>
                <Route path="/login" element = {<Login />} />
            </Routes>
              
        </div>
    )
};

export default Svg;