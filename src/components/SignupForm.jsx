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

const SignupForm = props => {
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
                        <TextInput name='password_confirmation' label='Confirm Password' inputProps={{ type: 'password' }} />
                    </Grid>

                    <Grid item xs={12}>
                        <Button className={button} color='secondary' fullWidth variant='contained' onClick={handleSubmit}>
                            SIGNUP
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

    if (!values.password_confirmation) {
        errors.password_confirmation = 'Required';
    }

    if (values.password && values.password_confirmation) {
        if (values.password !== values.password_confirmation) {
            errors.password_confirmation = '*Passwords do not match. Please try again';
        }
    }

    return errors;
};

export default SignupForm;
