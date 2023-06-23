import React, { useState } from 'react';
import './VaultPage.css';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"; 

function VaultPage() {
    
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const passDoc = await addDoc(collection(db, "passwords"), {
        password: password,    
      });
      alert('Password has been submitted ✔');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setPassword("");
  }

  return (
    <div className='vault-container'>
        <h1 className="password-title">Password Input 🔐</h1>
        <form className='password-form' onSubmit={handleSubmit}>
          <label>Password:   </label>
          <input placeholder='Input Password Here' 
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>

          <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default VaultPage