import React, { useState } from "react";
import MediaSection from "./media_section";
import MediaDataArray from "./mediaArray";



function mediaItem(mediaitems){
    return <MediaSection 
        key = {mediaitems.id}
        {...mediaitems}
        
    />

};

function MediaComponent(){
    const [cartisfilled, setCartIsFilled] = useState(false)

    function handleIsFilled (prev){
        setCartIsFilled(prev => !prev)
    }

    return (
        <div className="row  media m-0 mt-4">
            {MediaDataArray.map(mediaItem)}

        </div>
    )
};



export default MediaComponent;