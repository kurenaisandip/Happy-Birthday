import React from "react";
import birthdayCakeLogo from '/home/sandip/Documents/Happy-Birthday/src/assets/logo/birthday-cake.png';

function Login() {
    
    return (
        <>
        <div className="login">
            <div className="logo">
                <img src = {birthdayCakeLogo} alt="logo" />
                <a href="">Signin</a>
            </div>
        </div>
        
        
        </>
    )
}

export default Login;