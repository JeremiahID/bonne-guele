
import React from "react";
import close from "../../Images/close-cart.svg"
import arrowRight from "../../Images/arrowRight.svg";
import arrowLeft from "../../Images/arrowLeft.svg";
import { Link } from "react-router-dom";


function PassAuth(props) {
    return (
        <div className="account-wrapper d-flex justify-content-center align-items-center position-fixed top-0 end-0">
            <div className="account-form-container d-flex flex-column justify-content-between ">
                <button className="svg-button account-button p-2 m-0 " onClick={props.openAccount}>
                    <Link to="/home">
                        <img className=" close-cart-icon cart-icon " src={close} alt="close cart icon" />
                    </Link>
                </button>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h1 className="text-center m-4">Password Authentication</h1>
                    <p className="text-center m-1">Enter the password to continue</p>
                </div>
                <form action="" method="post" className="  account-form d-flex  ">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <input type="password" name="password" id="password" aria-label="password" placeholder="*********" className="login-form-email m-4" />
                        <button className="p-1 account-submit-button">
                            Continue
                        </button>
                    </div>
                </form>
                <button className="svg-button account-button  justify-content-start p-2 m-0 " onClick={props.openAccount}>
                    <Link to="/gmailAuth">
                        <img className=" close-cart-icon cart-icon " src={arrowLeft} alt="close cart icon" />
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default PassAuth;