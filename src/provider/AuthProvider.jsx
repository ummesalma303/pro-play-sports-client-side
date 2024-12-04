import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from '../firebase/Firebase.config';

const provider = new GoogleAuthProvider();
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {


    const [loader,setLoader]=useState(false)
    const [user,setUser]=useState(null)


    /* ---------------------------- login with google --------------------------- */
    const googleLoginUser=()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user)
            console.log(result,'login successfully')
          }).catch((error) => {
            console.log(error.message)
          });
    }

    // console.log(user)


    const signOutUser=()=>{
        signOut(auth).then(() => {
            alert('successfully sign out')
          }).catch((error) => {
            console.log(error)
          });
    }

    // on auth change

    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth, (user) => {
            console.log(user)
            setUser(user)
        })
        return ()=>subscribe()
    },[])


    const info={
        setUser,
        user,
        googleLoginUser,
        signOutUser
    }

    return (
        <div>
            <AuthContext.Provider value={info}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;