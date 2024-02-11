import { useState } from "react";
import "./ragister.scss";
import { useRef } from "react";

const Ragister = () => {
    const[email,setEmail]= useState("")
    const[password,setPassword]= useState("")
    const emailRef = useRef()
    const passwordRef = useRef()

    const hnadleStart = ()=>{
        setEmail(emailRef.current.value)
    }
    const hnadleFinish = ()=>{
        setPassword(passwordRef.current.value)
    }
  return (
    <div className='ragister'>
        <div className="top">
             <div className="wrapper">
                <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
                <button className="loginButton">Sing In</button>
            </div>
        </div>
        <div className="continer">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anythime.</h2>
            <p>
                Ready to wacth? Enter Your email to create or restart your membership. 
            </p>

            {!email?(<div className="input">
                <input type="email" placeholder="email address" ref={emailRef}/>
                <button className="registerButton" onClick={hnadleStart}>
                    Get Start
                </button>
            </div>):(
                <form className="input">
                <input type="password" placeholder="password" ref={passwordRef}/>
                <button className="registerButton" onClick={hnadleFinish}>
                    Start
                </button>
            </form>
            )}
            
        </div>
    </div>
  )
}

export default Ragister