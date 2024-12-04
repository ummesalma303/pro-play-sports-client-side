import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
           <div className='text-center space-y-6'>
           <h2 className='text-5xl font-bold'>DATA NOT FOUND</h2>
           <NavLink to='/' className='btn btn-accent text-white'>Go Home</NavLink>
           </div>
        </div>
    );
};

export default ErrorPage;