import React from "react";                                                                                                        
import './css/App.css'  
import Header from "./Components/header";
import Home from "./Pages/Home/home";
import Media from "./Pages/Media/media"
import Agenda from "./Pages/Agenda/agenda";
import { Route, Routes } from "react-router-dom";
                                                                                                                                                                            
function App(){

    return (
        <div className="">
            
            <Header />
            <Routes>
                <Route path="/home" element = {<Home />} />
                <Route path="/media" element = {<Media />} />
                <Route path="/agenda" element = {<Agenda />} />
            </Routes>

        </div>
    )
};

export default App;