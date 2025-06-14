import React, { useState } from "react";
import MediaSection from "./media_section";
import MediaDataArray from "./mediaArray";



function MediaItem(mediaitems){

    return <MediaSection 
        key = {mediaitems.id}
        {...mediaitems}

    />

};

function MediaComponent(){

    return (
        <div className="row  media m-0 mt-4">
            {MediaDataArray.map(MediaItem)}

        </div>
    )
};



export default MediaComponent;