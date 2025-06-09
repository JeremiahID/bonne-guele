import React from "react";
import {  Link } from 'react-router-dom';

function Nav(){
    return (
        <div className="navigation d-md-block d-none ">
            <ul className=" d-flex   ">

                <li>
                    <Link to = ''>Ehop</Link>
                </li>
                <li>
                    <Link to = ''>Media</Link>
                </li>
                <li>
                    <Link to = ''>Agenda</Link>
                </li>
                <li>
                    <Link to = ''>Concept</Link>
                </li>
                <li>
                    <Link to = ''>Shop</Link>
                </li>

                {/* <li><a href="http://" target="_blank" rel="noopener noreferrer"> Media </a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer"> Agenda </a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer"> concepts </a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer"> shops </a></li> */}
            </ul>

            {/* <Routes>
                <Route path="./Media/media" component={Media} />
                <Route path="/agenda" component={Agenda} /> 
            </Routes> */}
            
        </div>
    )
};

export default Nav;