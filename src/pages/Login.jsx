import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const {googleLoginUser} =useContext(AuthContext)
    // console.log(googleLoginUser)
    return (
        <div className='h-[60vh]'>
           <div className='text-center'>
           <button onClick={googleLoginUser} className='btn'><FcGoogle />Login With Google</button>
           </div>
        </div>
    );
};

export default Login;