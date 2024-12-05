import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loader}= useContext(AuthContext)

   if(loader){
    return <div><span className="loading loading-infinity loading-lg"></span></div>
   }

    if (user) {
        return children
    }
    return (
        <Navigate to='/register'></Navigate>
    );
};

export default PrivateRoute;