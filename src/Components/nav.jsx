import React from "react";
import {  Link } from 'react-router-dom';

function Nav(){
    return (
        <div className="navigation d-md-block position-relative ">
            <ul className=" d-flex ">

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

export default Nav;