import React from "react";
import birthdayCakeLogo from '/home/sandip/Documents/Happy-Birthday/src/assets/logo/birthday-cake.png';

function Login() {
    
    return (
        <>
        <div className="login">
            <div className="logo">
                <img src = {birthdayCakeLogo} alt="logo" />
                <h1>Birthday</h1>
            </div>
            <div className="login-form">
                <h3>Sign in</h3>
                <form onSubmit={login}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required />
                    <button type="submit">Sign in</button>
                </form>
                <h3>or sign in with:</h3>
                <div className="social-media">
                    <button><i className="fab fa-google"></i> Google</button>
                    <button><i className="fab fa-facebook"></i> Facebook</button>
                    <button><i className="fab fa-twitter"></i> Twitter</button>
                </div>
                <p><a href="">Don't have an Account?</a></p>
                <a href="forgot-password.html">Forgot Password?</a>
            </div>
        </div>
        
        
        </>
    )
}

export default Login;