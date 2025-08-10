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
                    <div className="cart-content-section-left">
                        <img src = {cartItemImage} alt="" srcset="" />
                    </div>
                    <div className="cart-content-section-middle flex flex-column justify-content-between  align-items-start ">
                        <p className="">
                            Lui Vuitton
                        </p>
                        <p className="m-0">
                            ${itemPrice}
                        </p>
                    </div>
                    <div className="cart-content-section-right d-flex flex-column">
                        <div className="delete-icon flex justify-content-end align-items-start p-1">
                            <button type="button" className="svg-button">
                                <img src={deleteIcon} alt="delete button" className="svg " />
                            </button>
                        </div>
                        <div className="add-remove-price flex justify-content-around align-items-center">
                            <div>
                                <button type="button" className="svg-button" onClick={DecreaseCount}>
                                    <img src={minus} alt="Minus-svg" className="svg" />
                                </button>
                            </div>
                            <p className=" fs-md-5 pt-3">{count}</p>
                            <div>
                                <button type="button" className="svg-button" onClick={IncreaseCount}>
                                    <img src={add} alt="add-svg" className="svg" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}