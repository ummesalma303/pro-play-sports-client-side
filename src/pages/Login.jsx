import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    return (
        <div className='h-[60vh]'>
           <div className='text-center'>
           <button className='btn'><FcGoogle />Login With Google</button>
           </div>
        </div>
    );
};

export default Login;