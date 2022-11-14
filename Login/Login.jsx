import React from 'react'
import "./login.css"
const Login = () => {
  return (
<div className="login">
    <div className="loginWrapper">
       <span className="loginTitle">LOGIN</span>
               <form className="loginForm">
            <input placeholder='Enter Username' type="username" className="loginInput" />
            <input placeholder='Enter Password' type="password" className="loginInput" />
            <button className="loginButton" >Login</button>
        </form>
    </div>
    <span className="loginToRegister">Register</span>
</div>
    )
}

export default Login