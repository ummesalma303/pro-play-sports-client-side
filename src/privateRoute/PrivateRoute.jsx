import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
// import { DNA } from 'react-loader-spinner';
import Loader from '../components/Loader';

const PrivateRoute = ({children}) => {
    const {user,loader}= useContext(AuthContext)
    const location=useLocation()
   if(loader){
    return <Loader></Loader>
   }

    if (user) {
        return children
    }
    return (
        <Navigate replace={true} state={location.pathname} to='/register'></Navigate>
    );
};

export default PrivateRoute;