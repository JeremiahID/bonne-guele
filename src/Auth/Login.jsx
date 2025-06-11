import React from "react";
import close from "../Images/close-cart.svg"
import { Link, Route, Routes } from "react-router-dom";
import Register from "./Register";



function Login(props) {
    return(
        <div className="login-wrapper d-flex justify-content-center align-items-center position-fixed top-0 end-0">
            <div className="login-form-container d-flex flex-column justify-content-between ">
                <button className="svg-button login-button p-2 m-0 " onClick={props.closeAccount}>
                    <Link to="/home"> 
                        <img className=" close-cart-icon cart-icon " src={close} alt="close cart icon" />
                    </Link>
                </button>
                <form action="" method="post" className="login-form d-flex flex-column justify-content-center ">
                    <div className="d-flex flex-column ">
                        <input type="email" name="Email" id="" aria-label="Email" placeholder="example@gmail.com" className="login-form-email m-4" />
                        <input type="password" name="password" id="password" aria-label="password" placeholder="Password"  className="login-form-email"/>
                    </div>
                    <div className="forget-password m-4">
                        <Link to="/"  className="m-4 text-lowercase text-decoration-none">forget password?</Link>
                    </div>
                    <button className="p-1 Login-submit-button">
                        Login
                    </button>

                    <p className="m-4 ">
                        Don't have an account?
                        <Link to = "/register" className=" text-capitalize text-decoration-none px-1">Resgiter</Link>
                    </p>
                </form>

            </div>
            <Routes>
                <Route path="/register" element = {<Register />} />
            </Routes>
        </div>
    )
}

export default Login;