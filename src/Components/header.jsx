import React from "react";
import Nav from "./nav";
import Svg from "./svg";


function Header(){
    return (
        <div className="header d-flex">
            <a href="/" target="_blank" className="company-name"> BONNE GUELE </a>

            {/* the nav components */}
            <Nav />

            {/* the svg components */}
            <Svg   />
            

        </div>
    )
};


export default Header;