import React from "react";
import Nav from "./nav";
import Svg from "./svg";
import Logo from '../Images/logo.svg'

function Header(){
    return (
        <div className="header d-flex">
            <a href="/" target="_blank" className="company-name">
                <img src={Logo} alt="" srcset="" />
            </a>

            {/* the nav components */}
            <Nav />

            {/* the svg components */}
            <Svg   />
            

        </div>
    )
};


export default Header;