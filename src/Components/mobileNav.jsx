import React from "react";
import {  Link } from 'react-router-dom';

function MobileNav(){
    return (
        <div className=" position-relative ">
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