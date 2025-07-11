import React from "react";
import Logo from '../Images/logo.svg'
import close from "../Images/close-cart.svg"
import {  Link } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import contactIcon from '../Images/contact.svg';
import Login from "../Auth/Login";


function MobileNav(props){
    return (
        <div className="mobile-navigation  position-fixed top-0 end-0 ">

            <div className="flex justify-content-around mobile-nav-head">
                <a href="/" className=" ">
                    <img src={Logo} alt="Logo" className="mobile-nav-logo" />
                </a>
                <button className="svg-button" onClick={props.closeHambuger}>
                    <Link to="/"> 
                        <img className="mobile-nav-svg" src={close} alt="close cart icon" />
                    </Link>
                </button>
            </div>

            <ul className="p-2">

                <li className="active-link" onClick={props.closeHambuger} >
                    <Link className="" to="/eshop">E-shop</Link>
                </li>
                <li>
                    <Link className="text-white" to="/media" onClick={props.closeHambuger}>Media</Link>
                </li>
                <li>
                    <Link className="text-white" to="/agenda" onClick={props.closeHambuger}>Agenda</Link>
                </li>
                <li>
                    <Link className="text-white" to = '' onClick={props.closeHambuger}>Concept</Link>
                </li>
                <li>
                    <Link className="text-white" to = '' onClick={props.closeHambuger}>Shop</Link>
                </li>

            </ul>

            <button className='mobile-contact' onClick={props.openAccount}>
                <Link to="/login"  >
                    <img  className ='mobile-nav-svg' src={contactIcon} alt="contactIcon"  />
                </Link>
            </button>


            <Routes>
                <Route path="/login" element = {<Login />} />
            </Routes>
            
        </div>
    )
};

export default MobileNav;