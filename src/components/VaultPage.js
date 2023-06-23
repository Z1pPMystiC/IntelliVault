import React, { useEffect, useState } from 'react';
import './VaultPage.css';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase"; 

function VaultPage() {
    
  const [password, setPassword] = useState("");
  const [app, setApp] = useState("");
  const [passwords, setPasswords] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const passDoc = await addDoc(collection(db, "passwords"), {
        password: password,
        app: app,   
      });
      alert('Password has been submitted ✔');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setPassword("");
    setApp("");
    fetchPasswords();
  }

  const fetchPasswords = async () => { 
    await getDocs(collection(db, "passwords"))
        .then((querySnapshot)=>{               
          const items = [];  
          querySnapshot.forEach((doc) => {
            items.push(doc.data());
          });
            setPasswords(items);                
            console.log(passwords, items);
        })
  }

  useEffect(()=>{
      fetchPasswords();
  }, [])

  return (
    <div className='vault-container'>
        <h1 className="password-title">Password Input 🔐</h1>
        <form className='password-form' onSubmit={handleSubmit}>
          <label>Password:   </label>
          <input placeholder='Password' 
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>

          <label>Application:   </label>
          <input placeholder='Application' 
          value={app}
          onChange={(e) => setApp(e.target.value)}/>

          <button type='submit'>Submit</button>
        </form>
        <div className="password-content">
          {
              passwords?.map((password,i)=>(
                  <p key={i}>
                      {password.app}: {password.password}
                  </p>
              ))
          }
      </div>
    </div>
  )
}

export default VaultPage