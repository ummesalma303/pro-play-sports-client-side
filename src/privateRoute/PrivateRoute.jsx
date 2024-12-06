import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import { DNA } from 'react-loader-spinner';
import Loader from '../components/Loader';

const PrivateRoute = ({children}) => {
    const {user,loader}= useContext(AuthContext)

   if(loader){
    return <Loader></Loader>
   }

    if (user) {
        return children
    }
    return (
        <Navigate to='/register'></Navigate>
    );
};

export default PrivateRoute;