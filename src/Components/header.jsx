import React from "react";
import Nav from "./nav";
import Svg from "./svg";
import Cart from "./cart";
import Login from "../Auth/Login";
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

    function handleShowLogin () {
        setShowLogin(!showlogin)
    }

    function handleCloseIcon(){
        setShowLogin((prevShowLogin) => {!prevShowLogin})
        console.log(prevShowLogin)
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

            <Svg  openCart = {handleShowCart} openAccount = {handleShowLogin} openSearch = {handleShowSearch}/>
            
           {showcart ? <Cart openCart = {handleShowCart} /> : null }
           {showlogin ? <Login openAccount = {handleShowLogin} /> : null }
           {showsearch? <Search openSearch = {handleShowSearch} /> : null }


        </div>
    )
};

export default Header;