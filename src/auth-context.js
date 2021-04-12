import React, { useState } from 'react';
import * as auth from './auth-provider';
import firebase from 'firebase/app'

const AuthContext = React.createContext();

export const AuthProvider = props => {
    const [token, setToken] = useState();

    firebase.auth().onAuthStateChanged((user) => {

        if(user?.uid) {
            setToken(user.uid)
            return
        }

        setToken(null)

      });


    const login = async payload => {
        const user = await auth.login(payload);
        setToken(user?.uid)
    }

    const logout = () => {
        auth.logout();
        setToken(null);
    };

    const register = async payload => {

        await auth.register(payload);
    }

    const contextValue = { login, logout, register, token };

    return <AuthContext.Provider value={contextValue} {...props} />;
};

export const useAuth = () => React.useContext(AuthContext);
