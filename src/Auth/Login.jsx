import React from "react";
import close from "../Images/close-cart.svg"



function Login(props) {
    return(
        <div className="login-wrapper d-flex justify-content-center align-items-center ">
            <div className="login-form-container d-flex flex-column justify-content-between ">
                <button className="svg-button login-button p-2 m-0 " onClick={props.closeLogin}>
                    <img className=" close-cart-icon cart-icon " src={close} alt="close cart icon" />
                </button>
                <form action="" method="post" className="login-form">
                    <input type="email" name="Email" id="" aria-label="Email" placeholder="example@gmail.com" />
                </form>

            </div>
        </div>
    )
}

export default Login;