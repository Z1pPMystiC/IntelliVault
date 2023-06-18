import React, { useState } from 'react';
import { Button } from './Button';
import { auth } from "../firebase";
import './LoginPage.css';
import'../App.css';
import { signInWithEmailAndPassword } from 'firebase/auth';

function LogInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            window.location.href = '/vault';
        }).catch((error) => {
            console.log(error);
        })
    }
    
    return (
        <div className="log-in-container">
            <video src='/videos/tech-background-2.mp4' autoPlay loop muted playsInline/>
            <form className='log-in-form' onSubmit={logIn}>
                <h1>Enter the Vault</h1>
                <input type="email" placeholder="Enter your email" 
                value={email} onChange={(e) => setEmail(e.target.value)}
                className='text-input'></input>
                <input type="password" placeholder="Enter your password" 
                value={password} onChange={(e) => setPassword(e.target.value)}
                className='text-input'></input>
                <button className='log-in-button' type="submit">Log In</button>
            </form>
        </div>
    )
}


export default LogInPage;