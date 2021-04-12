import React from 'react';
import { Button, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import notFoundImg from '../assets/img/404.svg';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        paddingTop: '5rem',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '20px'
    },
    img: {
        objectFit: 'cover',
        width: '50vw'
    },
    biggerImg: {
        width: '80vw'
    },
    biggerTxt: {
        fontSize: '2rem'
    }
});

const NotFound = props => {
    const classes = useStyles();
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const goHome = () => props.history.push('/');

    return (
        <div className={classes.root}>
            <div>
                <img
                    className={clsx(classes.img, {
                        [classes.biggerImg]: isSmallScreen
                    })}
                    src={notFoundImg}
                    alt='Not Found'
                />
            </div>
            <Typography className={clsx({ [classes.biggerTxt]: !isSmallScreen })}>It looks like you're lost.</Typography>
            <Button variant='outlined' onClick={goHome}>
                Go Home
            </Button>
        </div>
    );
};

export default NotFound;
