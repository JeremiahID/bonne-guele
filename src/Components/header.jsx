import React from "react";
import Nav from "./nav";
import Svg from "./svg";
import VariousSvg from "./svg-components/dictionarySvg";

// function createCard(celebrity){
//     return <Card
//       key = {celebrity.id}
//       name={celebrity.name}
//       img={celebrity.imgUrl}
//       tel = {celebrity.tel}
//       email = {celebrity.email}
//     />
// }

function Header(){
    return (
        <div className="header d-flex">
            <a href="http://" target="_blank" rel="noopener noreferrer">BONNE GUELE </a>

            {/* the nav components */}
            <Nav />

            {/* the svg components */}
            <Svg   />
            

        </div>
    )
}





export default Header;