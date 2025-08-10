import deleteIcon from "../Images/delete.svg";
import minus from "../Images/minus.svg";
import add from "../Images/add.svg"
import cartItemImage from "../Pages/Media/media-section-eight-right.webp"
import { useState } from "react";



export default function CartContent(){

    const[count, setCount] = useState(0)

    function IncreaseCount(prevCount){
        setCount(count + 1)
        HandlePriceIncrease();
    }

    function DecreaseCount(){
        if (count > 0){
            setCount(count - 1)
            HandlePriceDecrease()
        }
    }

    // The State of Price
    const [itemPrice , setItemPrice] = useState(0)

    function HandlePriceIncrease(){
        setItemPrice (itemPrice + 120)
    }

    function HandlePriceDecrease(){
        setItemPrice (itemPrice - 120)
    }


    return (
        <div className="cart-body-wrapper ">
            <div className="cart-body py-2 flex flex-column justify-content-start ">
            {/* cart content structure */}
                <div className="cart-content my-1 flex ">
                    <div className="cart-right-wrapper flex">
                        <div className="cart-content-right-section-one">
                            <img src = {cartItemImage} alt="" srcset="" />
                        </div>
                        <div className="cart-content-right-section-two flex flex-column justify-content-between  align-items-start ">
                            <p className="">
                                Lui Vuitton
                            </p>
                            <p className="m-0">
                                ${itemPrice}
                            </p>
                        </div>
                    </div>
                    
                    {/* Mobile bottom content */}
                    <div className="cart-left-wrapper">
                        <div className="cart-content-left-section d-flex flex-md-column ">
                            <div className="delete-icon flex justify-content-md-end align-items-start p-1">
                                <button type="button" className="svg-button">
                                    <img src={deleteIcon} alt="delete button" className="svg-cart-content " />
                                </button>
                            </div>
                            <div className="add-remove-price flex justify-content-md-around align-items-md-center">
                                <div>
                                    <button type="button" className="svg-button" onClick={DecreaseCount}>
                                        <img src={minus} alt="Minus-svg" className="svg-cart-content" />
                                    </button>
                                </div>
                                <p className=" fs-md-5 fs-3 text-black pt-3">{count}</p>
                                <div>
                                    <button type="button" className="svg-button" onClick={IncreaseCount}>
                                        <img src={add} alt="add-svg" className="svg-cart-content" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                                <div className="cart-content my-1 flex ">
                    <div className="cart-right-wrapper flex">
                        <div className="cart-content-right-section-one">
                            <img src = {cartItemImage} alt="" srcset="" />
                        </div>
                        <div className="cart-content-right-section-two flex flex-column justify-content-between  align-items-start ">
                            <p className="">
                                Lui Vuitton
                            </p>
                            <p className="m-0">
                                ${itemPrice}
                            </p>
                        </div>
                    </div>
                    
                    {/* Mobile bottom content */}
                    <div className="cart-left-wrapper">
                        <div className="cart-content-left-section d-flex flex-md-column ">
                            <div className="delete-icon flex justify-content-md-end align-items-start p-1">
                                <button type="button" className="svg-button">
                                    <img src={deleteIcon} alt="delete button" className="svg-cart-content " />
                                </button>
                            </div>
                            <div className="add-remove-price flex justify-content-md-around align-items-md-center">
                                <div>
                                    <button type="button" className="svg-button" onClick={DecreaseCount}>
                                        <img src={minus} alt="Minus-svg" className="svg-cart-content" />
                                    </button>
                                </div>
                                <p className=" fs-md-5 fs-3 text-black pt-3">{count}</p>
                                <div>
                                    <button type="button" className="svg-button" onClick={IncreaseCount}>
                                        <img src={add} alt="add-svg" className="svg-cart-content" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}