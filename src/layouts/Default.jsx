import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { useAuth } from '../auth-context';
import SideMenu from '@/SideMenu';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: '#fff',
        fontSize: '1rem'
    },
    toolBar: {
        justifyContent: 'space-between'
    }
}));

const DefaultLayout = ({ children, history }) => {
    const classes = useStyles();
    const { token, logout } = useAuth();

    const routeToLogin = () => history.push('/login');

    return (
        <div className={classes.root}>
            <AppBar position='static' color='secondary'>
                <Toolbar className={classes.toolBar}>
                    <SideMenu history={history} />

                    {token ? (
                        <Button className={classes.menuButton} onClick={logout} children='LOGOUT' />
                    ) : (
                        <Button className={classes.menuButton} onClick={routeToLogin} children='LOGIN' />
                    )}
                </Toolbar>
            </AppBar>
            <div>{children}</div>
        </div>
    );
};

export default DefaultLayout;
