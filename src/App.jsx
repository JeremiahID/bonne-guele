import React from "react";                                                                                                        
import './css/App.css'  
import './css/Auth.css'
import Header from "./Components/header";
import Home from "./Pages/Home/home";
import Media from "./Pages/Media/media"
import Agenda from "./Pages/Agenda/agenda";
import { Route, Routes } from "react-router-dom";
import GmailAuth from "./Auth/AccountAuth/gmailAuth";
import PassAuth from "./Auth/AccountAuth/passAuth";
import Eshop from "./Pages/Eshop/eshop";


                                                                                                                                                                            
function App(){


    return (
        <div className="">
            <Header />
            <Routes>
                <Route path="/" element = {<Home />} />
                <Route path="/eshop" element = {<Eshop />} />
                <Route path="/media" element = {<Media />} />
                <Route path="/agenda" element = {<Agenda />} />
                <Route path="/gmailAuth" element = {<GmailAuth />} />
                <Route path="/passAuth" element = {<PassAuth />} />

            </Routes> 

        </div>
    )
};

export default App;