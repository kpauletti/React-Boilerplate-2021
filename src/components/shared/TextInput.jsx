import React from 'react';
import { Field } from 'react-final-form';
import { TextField } from '@material-ui/core';

export const TextInput = props => {
    const { name, label, inputProps } = props;

    return (
        <Field
            name={name}
            render={({ input, meta }) => (
                <TextField
                    {...input}
                    label={label}
                    fullWidth
                    margin='normal'
                    error={!!meta.error && !!meta.touched}
                    helperText={meta.error && meta.touched ? meta.error : ''}
                    {...inputProps}
                />
            )}
        />
    );
};
