import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase";
import "./Login.css";
import { signInWithEmailAndPassword ,createUserWithEmailAndPassword} from "firebase/auth";



function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email, password)
    .then(auth => {
        navigate('/') 
    })
    .catch(error => alert(error.message))

}

const register = e => {
    e.preventDefault();
     createUserWithEmailAndPassword(auth, email, password)
    .then((auth) =>{
        // sucessfully created a new user with email and password
        if (auth){
          navigate('/')  
        }
    })
    .catch(error => alert(error.message))
}
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By creating an account, you agree to Amazon's Clone Conditions of Use
          and Privacy Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
