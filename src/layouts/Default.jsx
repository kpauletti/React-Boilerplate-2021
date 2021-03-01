import React from 'react';
import { useAuth } from '../auth-context'

const DefaultLayout = ({ children }) => {

    const { logout } = useAuth();

    return (
        <div>
            <button onClick={logout}>Logout</button>
            {children}
        </div>
    )

}

export default DefaultLayout