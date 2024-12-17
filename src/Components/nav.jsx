import React from "react";
// import { Link } from "react-router";

function Nav(){
    return (
        <div className="navigation d-md-block d-none ">
            <ul className=" d-flex   ">
                {/* <li >
                    <Link to={'./Media/media'}>Eshop</Link>
                </li> */}
                <li><a href="http://" target="_blank" rel="noopener noreferrer"> Eshop </a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer"> Media </a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer"> Agenda </a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer"> concepts </a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer"> shops </a></li>
            </ul>
        </div>
    )
};

export default Nav;