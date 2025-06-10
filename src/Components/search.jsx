import React from "react";
import close from "../Images/close-cart.svg"


export default function Search(props){
    return (
        <div className="search-wrapper position-fixed top-0 end-0 d-flex justify-content-center align-items-center">
            <button className="search-close-button p-2 m-0" onClick={props.openSearch}>
                    <img className=" close-cart-icon cart-icon text-light " src={close} alt="close cart icon" />
            </button>

            <input className="search-bar" type="search" name="search" id="serach" aria-label="search" placeholder="Search" />
        </div>
    )
}   