import React from "react";
import MediaSection from "./media_section";
import web from './media-section-one-left.webp';
import MediaDataArray from "./mediaArray";


function mediaItem(mediaitems){
    return<MediaSection 
        img = {mediaitems.img}
        title = {mediaitems.title}
        link = {mediaitems.link}
    />

};

function MediaComponent(){
    return (
        <div className="row  media m-0">
            {MediaDataArray.map(mediaItem)}

        </div>
    )
}



export default MediaComponent;