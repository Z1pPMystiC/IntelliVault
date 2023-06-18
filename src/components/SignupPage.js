import React, { useState } from 'react';
import { auth } from "../firebase";
import './SignupPage.css';
import'../App.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            window.location.href = '/vault';
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="sign-up-container">
            <video src='/videos/tech-background-2.mp4' autoPlay loop muted playsInline/>
            <form className='sign-up-form' onSubmit={signUp}>
                <h1>Create an Account</h1>
                <input type="email" placeholder="Enter your email" 
                value={email} onChange={(e) => setEmail(e.target.value)}
                className='text-input'></input>
                <input type="password" placeholder="Enter your password" 
                value={password} onChange={(e) => setPassword(e.target.value)}
                className='text-input'></input>
                <button className='sign-up-button' type="submit">Sign Up</button>
            </form>
        </div>
    )
}


export default SignUpPage;