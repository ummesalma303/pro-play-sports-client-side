import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from '../firebase/Firebase.config';
import Swal from 'sweetalert2';

const provider = new GoogleAuthProvider();
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    // const navigate = useNavigate()
    const [loader,setLoader]=useState(true)
    const [user,setUser]=useState(null)
    const [logUser,setLogUser]=useState('')

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
       return signInWithPopup(auth, provider)
       
    }

    // console.log(user)


    const signOutUser=()=>{
        signOut(auth).then(() => {
          
            Swal.fire({
                title: "Success",
                text: "successfully sign out",
                icon: "success"
              });
          }).catch((error) => {
            Swal.fire({
                title: "Error",
                text: `${error.message}`,
                icon: "error"
              });
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