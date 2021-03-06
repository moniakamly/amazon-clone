import userEvent from '@testing-library/user-event';
import React, { useState } from 'react'; 
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import "./Login.css";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const signIn = e => {
        e.preventDefault();

        // some fancy firebase login 
        auth.signInWithEmailAndPassword(email,password)
            .then((auth) => {
                if (auth) {
                    history.push('/') 
                }
            })
            .catch(error => alert(error.message))  
    }

    const register = e => {
        e.preventDefault(); 
    
        // some fancy firebase register
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/'>
                <img className="login__logo" 
                    src="data:image/png;base64,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" 
                    alt="amazon-logo"
                />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button className="login__signInButton" type='submit' onClick={signIn} >Sign In</button>
                </form>
                <p>
                    By singing-in you agree to the AMAZON FAKE CLONE 
                    Conditions of Use & Sale. Please see our Privacy Notice, 
                    our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className="login__registerButton" onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
