import { useState } from "react";
import "./Login.scss";
import { useRef } from "react";

const Login = () => {
  return (
    <div className='Login'>
        <div className="top">
             <div className="wrapper">
                <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
            </div>
        </div>
        <div className="continer">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="Enter your email"/>
                <input type="password" placeholder="password"/>
                <button className="loginbutton">Sign In</button>
                <span>New to Netflix?<b>Sign up now</b></span>
            </form>
        </div>
    </div>
  )
}

export default Login