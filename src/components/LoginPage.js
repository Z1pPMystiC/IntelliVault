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
            console.log(userCredential);
        }).catch((error) => {
            console.log(error);
        })
    }
    
    return (
        <div className="log-in-container">
            <img src='/images/tech-background.png'></img>
            <form className='log-in-form' onSubmit={logIn}>
                <h1>Log In</h1>
                <input type="email" placeholder="Enter your email" 
                value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type="password" placeholder="Enter your password" 
                value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button className='log-in-button' type="submit">Log In</button>
            </form>
        </div>
    )
}


export default LogInPage;