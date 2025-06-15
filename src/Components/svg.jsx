import React from 'react';
import cartIcon from '../Images/cart.svg';
import contactIcon from '../Images/contact.svg';
import searchIcon from '../Images/search.svg';
import { Link } from "react-router-dom";
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Cart from './cart';
import Search from './search';
import { Route, Routes } from "react-router-dom";

function Svg(props){
    return (
        <div className='d-flex justify-content-md-around justify-content-end svg-container'>
            <button className='svg-button  d-md-flex d-none' onClick={props.openSearch}>
                <Link to="/search" >
                    <img  className ='svg' src={searchIcon} alt="searchIcon"  />
                </Link>
            </button>

            <button className='svg-button  d-md-flex d-none  ' onClick={props.openAccount}>
                <Link to="/login"  >
                    <img  className ='svg' src={contactIcon} alt="contactIcon"  />
                </Link>
            </button>
        
            <button className='svg-button' onClick={props.openCart} >
                <Link to="/cart">
                    <img  className ='svg' src={cartIcon} alt="cartIcon" />
                </Link>
            </button>

            <Routes>
                <Route path="/search" element = {<Search />} />
                <Route path="/register" element = {<Register />} />
                <Route path="/login" element = {<Login />} />
                <Route path="/cart" element = {<Cart />} />
            </Routes>
              
        </div>
    )
};

export default Svg;