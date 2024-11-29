import React from "react";
import Nav from "./nav";



function Header(){
    return (
        <div className="header d-flex">
            <a href="http://" target="_blank" rel="noopener noreferrer">BONNE GUELE </a>

            {/* the nav components */}
            <Nav />

            {/* the svg components */}
            

        </div>
    )
}





export default Header;