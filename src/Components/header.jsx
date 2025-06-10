import React from "react";
import Nav from "./nav";
import Svg from "./svg";
import Cart from "./cart";
import Login from "../Auth/Login";
import Logo from '../Images/logo.svg'
import { useState } from "react";



function Header(){

    const [showcart , setShowCart] = useState(false)

    function handleShowCart (){
        setShowCart(!showcart)
        console.log(showcart)
    }

    const [showlogin, setShowLogin] = useState(false)

    function handleShowLogin () {
        setShowLogin(!showlogin)
    }

    return (
        <div className="header d-flex">
            <a href="/home" className="company-name flex">
                <img src={Logo} alt="Logo" className="Logo" />
            </a>
            
            <Nav />

            <Svg  openCart = {handleShowCart} openLogin = {handleShowLogin}/>
            
           {showcart ? <Cart openCart = {handleShowCart} /> : null }
           {showlogin ? <Login openLogin = {handleShowLogin} /> : null }

        </div>
    )
};

export default Header;