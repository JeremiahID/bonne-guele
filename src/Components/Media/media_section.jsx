import React from "react";

function MediaSection(props){
    return (
        <div className="col-4 flex">
            <div className="">
                <div>
                    <img src={props.img} alt="" srcset="" />
                </div>
                <div>
                    <a href="">{props.link} </a>
                </div>
                <h1>{props.title}</h1>
            </div>
        </div>
    )
};



export default MediaSection;