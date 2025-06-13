import React from "react";
import Nav from "./nav";
import Svg from "./svg";
import Cart from "./cart";
import Login from "../Auth/Login";
import Search from "./search";
import Logo from '../Images/logo.svg'
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";



function Header(){
    // state to control the visibility of the cart dialog
    // This will be used to toggle the cart dialog
    const [showcart , setShowCart] = useState(false)

    function handleShowCart (){
        setShowCart(!showcart)

    }

    // state to control the visibility of the login dialog
    // This will be used to toggle the login dialog
    const [showlogin, setShowLogin] = useState(false)

    function handleShowLogin () {
        setShowLogin(prevShowLogin => !prevShowLogin)

    }

    // state to control the visibility of the search dialog
    // This will be used to toggle the search dialog
    const [showsearch, setShowSearch] = useState(false)

    function handleShowSearch(){
        setShowSearch(!showsearch)
    }


    // useLocation hook to get the current location
    // This will allow us to close dialogs when the route changes
    const location = useLocation();

    
    useEffect(() => {
      // Close dialogs when route changes
      console.log("location changed")
      setShowLogin(false);
    }, [location]);

    return (
        <div className="header-container d-flex ">
            <div className="header d-flex position-fixed top-0 ">
                <a href="/home" className="company-name flex justify-content-start">
                    <img src={Logo} alt="Logo" className="Logo" />
                </a>
                
                <Nav />

                <Svg  openCart = {handleShowCart}   openAccount = {handleShowLogin} openSearch = {handleShowSearch}/>
            
                {/* flip the state of the show login on display */}
                {showcart ? <Cart openCart = {handleShowCart} /> : null }
                {showsearch ? <Search openSearch = {handleShowSearch} /> : null }
                {showlogin ? <Login openAccount = {handleShowLogin} /> : null }

            </div>
        </div>

    )
};

export default Header;