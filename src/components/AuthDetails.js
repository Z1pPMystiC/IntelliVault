import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './AuthDetails.css';


function AuthDetails() {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        })

        return () => {
            listen();
        }
    }, []);
    
    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log("Successfully signed out");
        }).catch(error => console.log(error))
    }

    return (
        <div className='text'>{ authUser ? <p>Signed In</p> : <p>Signed Out</p>}</div>
    )
}

export default AuthDetails