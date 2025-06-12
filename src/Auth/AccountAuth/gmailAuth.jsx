import React from "react";
import close from "../../Images/close-cart.svg"
import arrowRight from "../../Images/arrowRight.svg";
import arrowLeft from "../../Images/arrowLeft.svg";
import { Link } from "react-router-dom";


function GmailAuth(props) {
    return (
        <div className="account-wrapper d-flex justify-content-center align-items-center position-fixed top-0 end-0">
            <div className="account-form-container d-flex flex-column justify-content-between ">
                <button className="svg-button account-button p-2 m-0 " onClick={props.openAccount}>
                    <Link to="/home">
                        <img className=" close-cart-icon cart-icon " src={close} alt="close cart icon" />
                    </Link>
                </button>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h1 className="text-center m-4">Gmail Authentication</h1>
                    <p className="text-center m-1">Enter the Gmail to continue</p>
                </div>
                <form action="" method="post" className="account-form-auth ">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <input type="email" name="email" id="email" aria-label="email" placeholder="example@gmail.com" className="login-form-email m-4" />
                        <button className="p-1 account-submit-button">
                            <Link to="/passAuth" className="text-white text-decoration-none fw-bold">
                                continue
                            </Link>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GmailAuth;