import React from "react";
import Logo from '../Images/logo.svg'
import close from "../Images/close-cart.svg"
import {  Link } from 'react-router-dom';

function MobileNav(props){
    return (
        <div className="mobile-navigation position-relative ">
            <div className="flex mobile-nav-head">
                <a href="/" className=" ">
                    <img src={Logo} alt="Logo" className="mobile-nav-logo" />
                </a>
                <button className="svg-button" onClick={props.carrt}>
                    <Link to="/"> 
                        <img className="svg" src={close} alt="close cart icon" />
                    </Link>
                </button>
            </div>


            <ul className="  ">

                <li className="">
                    <Link to="/eshop">E-shop</Link>
                </li>
                <li>
                    <Link to="/media">Media</Link>
                </li>
                <li>
                    <Link to="/agenda">Agenda</Link>
                </li>
                <li>
                    <Link to = ''>Concept</Link>
                </li>
                <li>
                    <Link to = ''>Shop</Link>
                </li>


            </ul>
            
        </div>
    )
};

export default MobileNav;