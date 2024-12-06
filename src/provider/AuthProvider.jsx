import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from '../firebase/Firebase.config';

const provider = new GoogleAuthProvider();
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    
    const [loader,setLoader]=useState(true)
    const [user,setUser]=useState('')
    const [logUser,setLogUser]=useState()

/* ----------------------------- create new user ---------------------------- */
    const createNewUser=( email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
/* ------------------------------ sign in user ------------------------------ */

const signInUser=(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}


/* ------------------ user name and photo update and added ------------------ */
const updateUser=(data)=>{
    return updateProfile(auth.currentUser,data)
    
}
    /* ---------------------------- login with google --------------------------- */
    const googleLoginUser=()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user)

            // setLoader( false)
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
            setUser(user)
            setLogUser(user)
            setLoader(false)
        })
        return ()=>subscribe()
    },[])


    const info={
        setUser,
        user,
        logUser,
        setLogUser,
        loader,
        createNewUser,
        updateUser,
        signInUser,
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