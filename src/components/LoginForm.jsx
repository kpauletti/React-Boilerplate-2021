import React from 'react';
import { Form } from 'react-final-form';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TextInput } from '@/shared';

const useStyles = makeStyles({
    button: {
        marginTop: '0.5rem',
        color: '#fff'
    }
});

const LoginForm = props => {
    const { onSubmit } = props;
    const { button } = useStyles();
    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit, submitting, pristine }) => (
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <TextInput name='email' label='Email' />
                    </Grid>

                    <Grid item xs={12}>
                        <TextInput name='password' label='Password' inputProps={{ type: 'password' }} />
                    </Grid>

                    <Grid item xs={12}>
                        <Button className={button} fullWidth color='secondary' variant='contained' onClick={handleSubmit}>
                            LOGIN
                        </Button>
                    </Grid>
                </Grid>
            )}
        />
    );
};

const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Required';
    }

    if (!values.password) {
        errors.password = 'Required';
    }

    return errors;
};

export default LoginForm;
