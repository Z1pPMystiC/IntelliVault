import React, { useEffect, useState } from 'react';
import './VaultPage.css';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase"; 

function VaultPage() {
    
  const [password, setPassword] = useState("");
  const [passwords, setPasswords] = useState([]);

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
    fetchPasswords();
  }

  const fetchPasswords = async () => { 
    await getDocs(collection(db, "passwords"))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setPasswords(newData);                
            console.log(passwords, newData);
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
          <input placeholder='Input Password Here' 
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>

          <button type='submit'>Submit</button>
        </form>
        <div className="password-content">
          {
              passwords?.map((password,i)=>(
                  <p key={i}>
                      {password.password}
                  </p>
              ))
          }
      </div>
    </div>
  )
}

export default VaultPage