import React from "react";

function MediaSection(props){
    return (
        <div className="col-4 flex ">
            <div className=" flex flex-column media-component ">
                <div className=" media-component-img ">
                    <img className="" src={props.img} alt="image"/>
                </div>
                <div className="media-component-links flex justify-content-start">
                    <a className="media-component-link" href="">{props.link} </a>
                    <a className="media-component-link" href="">{props.link} </a>
                    <a className="media-component-link" href="">{props.link} </a>
                </div >
                <div className="media-component-text">
                    <h1 className="fs-6 text-capitalize text-left ">{props.title}</h1>
                </div>
            </div>
        </div>
    )
};

export default MediaSection;