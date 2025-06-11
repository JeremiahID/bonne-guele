import React from "react";
import Nav from "./nav";
import Svg from "./svg";
import Cart from "./cart";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Search from "./search";
import Logo from '../Images/logo.svg'
import { useState } from "react";



function Header(){

    const [showcart , setShowCart] = useState(false)

    function handleShowCart (){
        setShowCart(!showcart)
        console.log(showcart)
    }

    const [showlogin, setShowLogin] = useState(false)

    function handleShowLogin (prevShowLogin) {
        setShowLogin(prevShowLogin => !prevShowLogin)
        console.log(prevShowLogin)
        console.log(showlogin)
        console.log("button clicked")

    }

    const [closeIcon, setCloseIcon] = useState(false)

    function handleCloseIcon(){
        setCloseIcon (!closeIcon)
        console.log(closeIcon)
        console.log("button clicked")
    }

    const [showsearch, setShowSearch] = useState(false)

    function handleShowSearch(){
        setShowSearch(!showsearch)
    }

    return (
        <div className="header d-flex position-fixed top-0">
            <a href="/home" className="company-name flex">
                <img src={Logo} alt="Logo" className="Logo" />
            </a>
            
            <Nav />

            <Svg  openCart = {handleShowCart} closeAccount = {handleCloseIcon} openAccount = {handleShowLogin} openSearch = {handleShowSearch}/>
        
            {/* flip the state of the show login on display */}
           {showcart ? <Cart openCart = {handleShowCart} /> : null }
           {showlogin && <Register openAccount = {handleShowLogin} /> }
           {closeIcon && <Login closeAccount = {handleCloseIcon} /> }
           {showsearch ? <Search openSearch = {handleShowSearch} /> : null }


        </div>
    )
};

export default Header;