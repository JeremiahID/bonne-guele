import React, { useState } from "react";

function MediaSection(props){
    const [cartisfilled, setCartIsFilled] = useState(true)

    function handleIsFilled (){
        setCartIsFilled(!cartisfilled)
    }
    return (
        <div className="col-4 flex ">
            <div className=" flex flex-column media-component ">
                <div className=" media-component-img ">
                    <img className="" src={props.img} alt="image"/>
                </div>
                <div className="media-component-links flex justify-content-between ">
                    <div>
                        <a className="media-component-link" href="">{props.linkOne} </a>
                        <a className="media-component-link" href="">{props.linkTwo} </a>
                        <a className="media-component-link" href="">{props.linkThree} </a>
                    </div>
                    <div>
                        <button className="svg-button  p-2 m-0 " onClick={handleIsFilled}>
                          <img src = {cartisfilled ? props.OutlineCart : props.filledCart} alt="Cart Display"  className = " cart-svg " />
                         </button>
                    </div>
                </div >
                <div className="media-component-text">
                    <h1 className="fs-6 text-capitalize text-left ">{props.title}</h1>
                </div>
            </div>
        </div>
    )
};

export default MediaSection;