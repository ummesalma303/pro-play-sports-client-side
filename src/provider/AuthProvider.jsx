import React from 'react';
import { createContext } from 'react';

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const info={
        name:'dfds'
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