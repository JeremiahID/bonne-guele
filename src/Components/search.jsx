import React from "react";
import close from "../Images/close-cart.svg"
import searchIcon from '../Images/search.svg';
import { Link, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/home";


export default function Search(props){
    return (
        <div className="search-wrapper position-fixed top-0 end-0 d-flex justify-content-center align-items-center">
            <button className="search-close-button p-2 m-0" onClick={props.openSearch}>
                <Link to="/home">
                    <img className=" close-cart-icon cart-icon text-light " src={close} alt="close cart icon" />
                </Link>
            </button>

            <div>
                <input className="search-bar" type="search" name="search" id="serach" aria-label="search" placeholder="Search" />
                <img  className ='svg' src={searchIcon} alt="searchIcon"  />
            </div>
            <Routes>
                <Route path="/home" element = {<Home />} />
            </Routes>
        </div>
    )
}   