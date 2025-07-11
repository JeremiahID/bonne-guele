import React from "react";
import close from "../Images/close-cart.svg"
import { Link, Route, Routes } from "react-router-dom";



function Register(props){
    return (
        <div className="account-wrapper d-flex justify-content-center align-items-center position-fixed top-0 end-0">
            <div className="account-form-container d-flex flex-column justify-content-between ">
                <button className="svg-button account-button p-2 m-0 " onClick={props.openAccount}>
                    <Link to="/"> 
                        <img className=" close-cart-icon cart-icon " src={close} alt="close cart icon" />
                    </Link>
                </button>
                <form action="" method="post" className="account-form d-flex flex-column justify-content-center ">
                    <div className="d-flex flex-column ">
                        <input type="text" name="fName" id="fName" aria-label="fName" placeholder="John" className="login-form-email m-3" />
                        <input type="text" name="lName" id="lName" aria-label="lName" placeholder="Hopkins" className="login-form-email " />
                        <input type="email" name="Email" id="" aria-label="Email" placeholder="example@gmail.com" className="login-form-email m-3 " />
                        <input type="password" name="password" id="password" aria-label="password" placeholder="Password"  className="login-form-email"/>
                        <input type="password" name="confirmPassword" id="confirmPassword" aria-label="confirmPassword" placeholder="Confirm password"  className="login-form-email m-3"/>
                    </div>
                    <button className="p-1 account-submit-button">
                        Register
                    </button>
                    <p className="m-4 ">
                        Already have an account?
                        <Link to = "/login" className="fw-bold text-capitalize text-decoration-none px-1">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    )
};

export default Register;