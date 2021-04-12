import React, { useState, useEffect } from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LoginForm from '@/LoginForm';
import SignupForm from '@/SignupForm';
import { useAuth } from '../auth-context';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        margin: '20vh 10px 0 10px'
    },
    paper: {
        width: '32rem',
        padding: '2rem'
    }
}));

const Login = ({ history }) => {
    const { token, login, register } = useAuth();
    const classes = useStyles();
    const [tab, setTab] = useState(0);

    const handleTabChange = (e, newTab) => {
        setTab(newTab);
    };

    const onRegister = values => {
        delete values.password_confirmation;
        register(values);
    };

    useEffect(() => {
        if (token) {
            history.push('/');
        }
    }, [token, history]);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Tabs value={tab} onChange={handleTabChange} indicatorColor='secondary' variant='fullWidth'>
                    <Tab label='Login' />
                    <Tab label='Signup' />
                </Tabs>

                <TabPanel value={tab} index={0}>
                    <LoginForm onSubmit={login} />
                </TabPanel>

                <TabPanel value={tab} index={1}>
                    <SignupForm onSubmit={onRegister} />
                </TabPanel>
            </Paper>
        </div>
    );
};

const TabPanel = props => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <div>{children}</div>}
        </div>
    );
};

export default Login;
