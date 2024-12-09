import React from "react";

function MediaSection(props){
    return (
        <div className="col-4 flex ">
            <div className=" flex flex-column  media-component ">
                <div className=" media-component-img ">
                    <img className="" src={props.img} alt="image"/>
                </div>
                <div className="media-component-link">
                    <a href="">{props.link} </a>
                </div >
                <div className="media-component-text">
                    <h1 className="fs-4 text-center text-wrap ">{props.title}</h1>
                </div>
            </div>
        </div>
    )
};



export default MediaSection;