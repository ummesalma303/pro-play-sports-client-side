import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import { DNA } from 'react-loader-spinner';

const PrivateRoute = ({children}) => {
    const {user,loader}= useContext(AuthContext)

   if(loader){
    return <div className='mx-auto flex justify-center'><DNA
    visible={true}
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
    /></div>
   }

    if (user) {
        return children
    }
    return (
        <Navigate to='/register'></Navigate>
    );
};

export default PrivateRoute;