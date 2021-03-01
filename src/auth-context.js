import React, { useEffect, useState } from 'react';
import * as auth from './auth-provider';
import { addAuthorization } from '#/api';

const AuthContext = React.createContext();

export const AuthProvider = props => {
    const [token, setToken] = useState();

    const authToken = auth.getToken();

    useEffect(() => {
        if (authToken) {
            addAuthorization(authToken);
            setToken(authToken);
        }
    }, [authToken]);

    const login = payload => auth.login(payload).then(user => setToken(user.authorization));

    const logout = () => {
        auth.logout();
        setToken(null);
    };

    const contextValue = { login, logout, token };

    return <AuthContext.Provider value={contextValue} {...props} />;
};

export const useAuth = () => React.useContext(AuthContext);
