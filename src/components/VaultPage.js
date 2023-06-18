import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import './VaultPage.css';

function VaultPage() {
    
    const userSignOut = () => {
        signOut(auth).then(() => {
            window.location.href = '/';
        }).catch(error => console.log(error))
    }
  
    return (
    <div className='vault-container'>
        <h1 className="log-in">Logged In, Welcome</h1>
        <button onClick={userSignOut}>Sign Out</button>
    </div>
  )
}

export default VaultPage