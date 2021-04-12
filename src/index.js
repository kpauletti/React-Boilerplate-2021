import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase';
import App from './App';
import { AuthProvider } from './auth-context';
import reportWebVitals from './reportWebVitals';
import { theme } from './theme';

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD0jhNLB9E6TsFpg_REBS03qlfePJR69x0",
    authDomain: "da-project-6570e.firebaseapp.com",
    projectId: "da-project-6570e",
    storageBucket: "da-project-6570e.appspot.com",
    messagingSenderId: "6044462783",
    appId: "1:6044462783:web:95fb7786475e0af247e00a",
    measurementId: "G-M8TPL5LRHW"
};

firebase.initializeApp(firebaseConfig)


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity
        }
    }
});

const isDevelopment = process.env.NODE_ENV === 'development';


ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <App />
                    </ThemeProvider>
                </BrowserRouter>
            </AuthProvider>
            {isDevelopment && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
