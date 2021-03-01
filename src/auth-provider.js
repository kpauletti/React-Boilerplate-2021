import { api, addAuthorization, removeAuthorization } from '#/api';

export const localStorageKey = '__auth__';

export const getToken = () => localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ data }) => {
    addAuthorization(data.authorization);
    localStorage.setItem(localStorageKey, data.authorization);
    return data;
};

export const login = payload => api.put('/auth', payload).then(handleUserResponse);

export const logout = () => {
    api.delete('/auth');
    removeAuthorization();
    localStorage.removeItem(localStorageKey);
};
