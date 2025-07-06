import React from "react";
import Logo from '../Images/logo.svg'
import close from "../Images/close-cart.svg"
import {  Link } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";


function MobileNav(props){
    return (
        <div className="mobile-navigation ">

            <div className="flex justify-content-around mobile-nav-head">
                <a href="/" className=" ">
                    <img src={Logo} alt="Logo" className="mobile-nav-logo" />
                </a>
                <button className="svg-button" onClick={props.closeHambuger}>
                    <Link to="/"> 
                        <img className="svg" src={close} alt="close cart icon" />
                    </Link>
                </button>
            </div>

            <ul className="p-2">

                <li className="active-link ">
                    <Link className="" to="/eshop">E-shop</Link>
                </li>
                <li>
                    <Link className="text-white" to="/media">Media</Link>
                </li>
                <li>
                    <Link className="text-white" to="/agenda">Agenda</Link>
                </li>
                <li>
                    <Link className="text-white" to = ''>Concept</Link>
                </li>
                <li>
                    <Link className="text-white" to = ''>Shop</Link>
                </li>

            </ul>

            
        </div>
    )
};

export default MobileNav;