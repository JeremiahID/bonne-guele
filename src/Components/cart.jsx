import React from "react";
import close from "../Images/close-cart.svg"
import cart from "../Images/cart.svg"

function Cart(){
    return (
        <div>
             <div className="cart-wrapper position-absolute top-0 end-0 no-scroll" >

                <div className="cart-container  position-absolute top-0 end-0 ">

                    <div className="cart-head flex ">

                        <div className="cart-icons-container flex justify-content-between  ">

                            <div className="cart-logo flex justify-content-evenly  p-0"> 
                                <img className=" close-cart-icon cart-icon " src={cart} alt="close cart icon" /> 

                                <p className="text-capitalize fs-5 fw-bold m-0">cart</p>

                            </div>


                            <div className="close-cart">
                                {/* <!-- CLOSE CART --> */}
                                <img className=" close-cart-icon cart-icon mx-2" src={close} alt="close cart icon" />
                            </div>

                        </div>

                    </div>

                    <div className="cart-body flex flex-column">
                        <p className="text-capitalize font-fc fs-6">Your cart is empty</p>

                        <a href="" target="_blank" className="btn-a "> start shopping</a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default Cart;