import Axios from 'axios';

export const api = Axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 5000,
    headers: {
        common: {
            'Content-Type': 'application/json'
        }
    }
});

export const addHeader = (name, value) => {
    api.defaults.headers.common[name] = value;
};

export const removeHeader = name => {
    delete api.defaults.headers.common[name];
};

export const addAuthorization = token => {
    addHeader('Authorization', token);
};

export const removeAuthorization = () => {
    removeHeader('Authorization');
};
